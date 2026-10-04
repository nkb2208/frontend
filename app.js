const BACKEND_URL = 'http://localhost:3000';

let selectedFile = null;

// Global previewFile function for all pages
window.previewFile = function(input, previewId) {
    if (input.files && input.files[0]) {
        const file = input.files[0];
        if (!file.type.match('image.*')) {
            alert('Please select an image file (JPG, PNG, WEBP).');
            return;
        }
        selectedFile = file;

        const previewBox = document.getElementById(previewId);
        if (previewBox) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewBox.innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-height: 300px; width: 100%; object-fit: cover; border-radius: 12px; margin-top: 15px;">`;
                previewBox.style.display = 'block';
                
                // Hide the upload text/icon if it's a direct sibling
                const uploadText = previewBox.parentElement.querySelector('strong');
                const uploadIcon = previewBox.parentElement.querySelector('div[style*="font-size:35px"]');
                const uploadSmall = previewBox.parentElement.querySelector('.small');
                if (uploadText) uploadText.style.display = 'none';
                if (uploadIcon) uploadIcon.style.display = 'none';
                if (uploadSmall) uploadSmall.style.display = 'none';
            };
            reader.readAsDataURL(file);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    
    // Auto-restore AI results if they exist (for hair.html, face.html, outfit.html)
    const restoreAIResults = () => {
        try {
            const currentPath = window.location.pathname.toLowerCase();
            let activeCategory = null;
            let resultsId = null;
            
            if (currentPath.includes('hair.html')) { activeCategory = 'hair'; resultsId = 'hairResults'; }
            else if (currentPath.includes('face.html')) { activeCategory = 'face'; resultsId = 'faceResults'; }
            else if (currentPath.includes('outfit.html')) { activeCategory = 'outfit'; resultsId = 'outfitResults'; }
            
            if (activeCategory) {
                const savedStr = localStorage.getItem('lumi_last_results');
                if (savedStr) {
                    const savedData = JSON.parse(savedStr);
                    if (savedData[activeCategory] && savedData[activeCategory].length > 0) {
                        const resultsArea = document.getElementById(resultsId);
                        if (resultsArea) {
                            let html = `<div class="section-title"><div><div class="eyebrow">Perfect Match</div><h2>LUMI's Suggestions</h2></div></div>`;
                            html += `<div class="grid grid-3">`;
                            html += savedData[activeCategory].map(item => typeof renderSurveyCard === 'function' ? renderSurveyCard(item) : '').join('');
                            html += `</div>`;
                            resultsArea.innerHTML = html;
                            resultsArea.style.display = 'block';
                        }
                    }
                }
            }
        } catch (e) {
            console.error('Failed to restore results', e);
        }
    };
    restoreAIResults();

    // Make global analyze function available to onclick handlers
    window.analyzePageImage = async function(targetCategory, resultsId) {
        if (!selectedFile) {
            alert('Please upload a photo first.');
            return;
        }

        const resultsArea = document.getElementById(resultsId);
        if (resultsArea) {
            resultsArea.style.display = 'block';
            resultsArea.innerHTML = `
                <div style="text-align: center; padding: 50px 0;">
                  <div class="spinner"></div>
                  <h3 id="loadingText" style="margin-top: 20px;">LUMI is analyzing your image...</h3>
                </div>
            `;
            resultsArea.scrollIntoView({behavior: 'smooth', block: 'start'});
        }

        try {
            const formData = new FormData();
            formData.append('image', selectedFile);

            let endpoint = `${BACKEND_URL}/api/analyze/face`;
            if (targetCategory === 'outfit' || targetCategory === 'body') {
                endpoint = `${BACKEND_URL}/api/analyze/body`;
            }

            const res = await fetch(endpoint, {
                method: 'POST',
                body: formData
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error || 'API Error');
            }

            const data = await res.json();
            
            // Render specific category
            if (resultsArea) {
                if (targetCategory === 'all') {
                    // For index.html - Render distinct sections
                    let html = `
                        <div class="section-title">
                            <div><div class="eyebrow">Styles for you</div><h2>LUMI's Suggestions</h2></div>
                        </div>
                    `;
                    
                    if (data.recommendations.outfit && data.recommendations.outfit.length > 0) {
                        html += `
                            <h3 style="margin: 30px 0 15px; font-size: 1.5rem; border-bottom: 1px solid #ddd; padding-bottom: 10px;">OUTFIT</h3>
                            <div class="grid grid-3">${data.recommendations.outfit.map(renderSurveyCard).join('')}</div>
                        `;
                    }
                    if (data.recommendations.makeup && data.recommendations.makeup.length > 0) {
                        html += `
                            <h3 style="margin: 30px 0 15px; font-size: 1.5rem; border-bottom: 1px solid #ddd; padding-bottom: 10px;">MAKEUP</h3>
                            <div class="grid grid-3">${data.recommendations.makeup.map(renderSurveyCard).join('')}</div>
                        `;
                    }
                    if (data.recommendations.hair && data.recommendations.hair.length > 0) {
                        html += `
                            <h3 style="margin: 30px 0 15px; font-size: 1.5rem; border-bottom: 1px solid #ddd; padding-bottom: 10px;">HAIR</h3>
                            <div class="grid grid-3">${data.recommendations.hair.map(renderSurveyCard).join('')}</div>
                        `;
                    }
                    
                    resultsArea.innerHTML = html;
                } else {
                    // For specific category pages (hair, face, etc.)
                    let items = [];
                    if (targetCategory === 'hair') items = data.recommendations.hair || [];
                    else if (targetCategory === 'makeup' || targetCategory === 'face') items = data.recommendations.makeup || [];
                    else if (targetCategory === 'outfit') items = data.recommendations.outfit || [];
                    else if (targetCategory === 'body') items = [...(data.recommendations.outfit||[]), ...(data.recommendations.makeup||[])];
                    
                    if (items.length > 0) {
                        resultsArea.innerHTML = `
                            <div class="section-title">
                                <div><div class="eyebrow">AI suggestions</div><h2>Styles for your profile</h2></div>
                            </div>
                            <div class="grid grid-3">
                                ${items.map(renderSurveyCard).join('')}
                            </div>
                        `;
                    } else {
                        resultsArea.innerHTML = `<p style="text-align:center;">No specific recommendations found for this category.</p>`;
                    }
                }
            }

            // Save data to localStorage so tutorial.html can read it
            localStorage.setItem('lumi_last_results', JSON.stringify(data.recommendations));

        } catch (error) {
            if (resultsArea) {
                resultsArea.innerHTML = `<p style="text-align:center; color:red;">Error: ${error.message}</p>`;
            }
            alert(`LUMI could not analyze this image. Error: ${error.message}`);
        }
    };
});

function getTutorial(id) {
    if (typeof getAllContent !== 'undefined') {
        return getAllContent().find(item => item.id === id);
    }
    return null;
}

// For tutorial.html
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('t-name')) {
        initTutorial();
    }
});

function initTutorial() {
    const urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id') || localStorage.getItem('lumi_selected_tutorial_id');
    let cat = urlParams.get('category') || localStorage.getItem('lumi_selected_tutorial_cat');
    
    if (!id || !cat) {
        document.querySelector('main.container').innerHTML = `
            <div style="text-align:center; padding: 50px 20px;">
                <h1>Tutorial Not Found</h1>
                <p>We couldn't find the requested tutorial. Please go back and select a style again.</p>
                <button class="btn" style="margin-top:20px;" onclick="window.history.back()">Go Back</button>
            </div>
        `;
        return;
    }

    const savedData = JSON.parse(localStorage.getItem('lumi_last_results') || '{}');
    const items = savedData[cat] || [];
    let data = items.find(i => i.id === id);

    // If not found in AI cache, try the manual survey database
    if (!data && typeof getTutorial === 'function') {
        data = getTutorial(id);
    }

    if (!data) {
        document.querySelector('main.container').innerHTML = `
            <div style="text-align:center; padding: 50px 20px;">
                <h1>Content Not Found</h1>
                <p>The requested tutorial (ID: ${id}) is not available in our database.</p>
                <button class="btn" style="margin-top:20px;" onclick="window.history.back()">Go Back</button>
            </div>
        `;
        return;
    }

    document.getElementById('t-name').textContent = data.title || data.name;
    
    const imgBox = document.getElementById('t-image');
    const imageToUse = data.imageUrl || data.primaryImage || data.fallbackImage;
    imgBox.style.background = `url('${imageToUse}') center/cover`;
    
    const tagsHtml = (data.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('');
    document.getElementById('t-tags').innerHTML = tagsHtml;
    
    let reasonsHtml = '';
    if (data.whyItSuitsUser) {
        reasonsHtml = `<li>${data.whyItSuitsUser}</li>`;
    } else if (data.tutorial && data.tutorial.matchReasons) {
        reasonsHtml = data.tutorial.matchReasons.map(r => `<li>${r}</li>`).join('');
    } else {
        reasonsHtml = `<li>This style perfectly matches your features.</li>`;
    }
    document.getElementById('t-reasons').innerHTML = `<ul>${reasonsHtml}</ul>`;
    
    const stepsHtml = data.tutorial.steps.map((s, i) => `
      <div class="step">
        <div><b>Step ${i+1}: ${s.title}</b><p>${s.desc}</p></div>
      </div>
    `).join('');
    document.getElementById('t-steps').innerHTML = stepsHtml;
    
    const videoBox = document.getElementById('t-video');
    if (data.tutorial.videoId) {
        videoBox.innerHTML = `
          <iframe src="https://www.youtube.com/embed/${data.tutorial.videoId}" width="100%" height="100%" style="min-height:330px; border:none;" frameborder="0" allowfullscreen></iframe>
        `;
        document.getElementById('t-source-btn').href = `https://www.youtube.com/watch?v=${data.tutorial.videoId}`;
    } else {
        videoBox.innerHTML = `<div style="padding:40px; text-align:center;">Video is being updated</div>`;
        document.getElementById('t-source-btn').style.display = 'none';
    }
}

// ==========================================
// MANUAL SURVEY LOGIC (For hair.html, etc.)
// ==========================================

const userState = {
    hair: {},
    face: {},
    outfit: {},
    body: {}
};

function selectPill(button, criteriaKey, category) {
    const parent = button.parentElement;
    parent.querySelectorAll('.pill').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    userState[category][criteriaKey] = button.getAttribute('data-val');
}

function submitSurvey(category, resultContainerId) {
    const choices = userState[category];
    const keys = Object.keys(choices);
    
    // YÃªu cáº§u chá»n Ã­t nháº¥t 1
    if (keys.length === 0) {
        alert("Please answer at least one question!");
        return;
    }

    const recommendations = getRecommendations(category, choices);
    const resultArea = document.getElementById(resultContainerId);
    
    if (recommendations.length === 0) {
        resultArea.style.display = 'block';
        resultArea.innerHTML = `
            <div class="section-title">
                <div><div class="eyebrow">Results</div><h2>No exact match found</h2></div>
            </div>
            <p>Please try a different combination.</p>
        `;
        resultArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
    }

    // PhÃ¢n loáº¡i káº¿t quáº£
    const exactMatches = recommendations.filter(r => r.score === r.totalCriteria);
    const partialMatches = recommendations.filter(r => r.score < r.totalCriteria);

    let html = '';

    if (exactMatches.length > 0) {
        html += `
            <div class="section-title">
                <div><div class="eyebrow">Perfect Match</div><h2>100% matched for you</h2></div>
            </div>
            <div class="grid grid-3">
                ${exactMatches.map(r => renderSurveyCard(r)).join('')}
            </div>
        `;
    }

    if (partialMatches.length > 0) {
        html += `
            <div class="section-title">
                <div><div class="eyebrow">Alternative Choices</div><h2>You might also like</h2></div>
            </div>
            <div class="grid grid-3">
                ${partialMatches.map(r => renderSurveyCard(r)).join('')}
            </div>
        `;
    }

    resultArea.style.display = 'block';
    resultArea.innerHTML = html;
    resultArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const TAG_NAMES = {
    "round": "Round Face", "v-line": "V-line", "square": "Square Face",
    "thick": "Thick Hair", "thin": "Thin Hair", "frizzy": "Frizzy Hair"
};

function renderSurveyCard(item) {
    let tagHtml = '';
    
    // Flatten tags if it's an object, else use as array
    const allTags = [];
    if (item.tags) {
        if (Array.isArray(item.tags)) {
            allTags.push(...item.tags);
        } else {
            Object.values(item.tags).forEach(arr => {
                allTags.push(...arr);
            });
        }
    }
    
    allTags.forEach(tag => {
        const displayTag = TAG_NAMES[tag] || tag;
        tagHtml += `<span class="tag">${displayTag}</span>`;
    });

    const descText = item.whyItSuitsUser || item.description || "";

    return `
      <a class="result card" href="tutorial.html?id=${item.id}&category=${item.category}" onclick="localStorage.setItem('lumi_selected_tutorial_id', '${item.id}'); localStorage.setItem('lumi_selected_tutorial_cat', '${item.category}');">
        <div class="look-img" style="background: url('${item.imageUrl || item.primaryImage || item.fallbackImage}') center/cover;" onerror="this.innerHTML='<div style=\\'padding:20px;text-align:center\\'>Image loading error</div>'; this.style.background='#eee'">
        </div>
        <h3 style="margin-top:15px">${item.name || item.title}</h3>
        <p>${descText}</p>
        <div style="margin-top:10px">${tagHtml}</div>
      </a>
    `;
}

