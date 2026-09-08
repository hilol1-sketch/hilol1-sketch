// ============================================================
// Shared behaviour across all pages
// ============================================================

const HEART_PATH = "M12 21s-7.5-4.6-10.2-9C-0.4 8.6 1.6 4 5.7 4c2.1 0 3.6 1.1 4.3 2.4C10.7 5.1 12.2 4 14.3 4c4.1 0 6.1 4.6 3.9 8-2.7 4.4-10.2 9-10.2 9z";
const SPARK_PATH = "M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z";

function shapeSVG(path, size, color, rotation, opacity){
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" style="transform:rotate(${rotation}deg); opacity:${opacity}" fill="${color}"><path d="${path}"/></svg>`;
}

// Scatter a soft field of hearts + sparkles behind the content
function initSparkField(){
  const field = document.querySelector('.spark-field');
  if(!field) return;
  const colors = ['#FF9EC4', '#F3D9F0', '#FFC2DA'];
  const count = window.innerWidth < 640 ? 9 : 16;
  let html = '';
  for(let i = 0; i < count; i++){
    const size = 14 + Math.random() * 22;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const rot = Math.random() * 360;
    const color = colors[i % colours.length];
    const isHeart = i % 3 !== 0;
    const path = isHeart ? HEART_PATH : SPARK_PATH;
    html += `<div style="position:absolute; top:${top}%; left:${left}%;">${shapeSVG(path, size, color, rot, 0.55)}</div>`;
  }
  field.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  initSparkField();
});
