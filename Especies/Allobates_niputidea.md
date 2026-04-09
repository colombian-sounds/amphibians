---
layout: page
title: "Allobates niputidea"
output: html_document
---

<style>
/* ── Species page — new design ─────────────────────────────── */
.sp-header { text-align: center; margin-bottom: 2rem; }
.sp-header img {
  width: 85%; max-width: 480px; height: auto;
  border-radius: 10px;
  display: block; margin: 0 auto 1rem;
}
.sp-header h2 { font-size: 1.6rem; font-weight: 600; margin-bottom: 4px; color: #1a1a1a; }
.sp-header .sp-author { font-size: 0.95rem; color: #555; }

.sp-section-label {
  font-size: 0.72rem; font-weight: 700;
  letter-spacing: 0.08em; text-transform: uppercase;
  color: #888; margin: 2rem 0 0.65rem;
}

/* Tabs */
.sp-tabs { display: flex; gap: 4px; margin-bottom: 0; }
.sp-tab-btn {
  padding: 7px 18px; font-size: 0.9rem;
  cursor: pointer; font-family: inherit;
  border: 0.5px solid #d0cfc8; border-bottom: none;
  border-radius: 6px 6px 0 0;
  background: #f5f4f0; color: #666;
  transition: background .15s, color .15s;
}
.sp-tab-btn:hover { background: #fff; color: #222; }
.sp-tab-btn.active { background: #fff; color: #111; font-weight: 600; }

.sp-tab-panel {
  display: none;
  padding: 1rem 1.1rem;
  border: 0.5px solid #d0cfc8;
  border-radius: 0 8px 8px 8px;
  background: #fff;
}
.sp-tab-panel.active { display: block; }

/* Video */
.sp-tab-panel video { border-radius: 6px; display: block; width: 100%; }

/* Spec image */
.sp-tab-panel .sp-spec-img {
  display: block; margin: 0 auto;
  max-width: 100%; height: auto; border-radius: 6px;
}

/* Data links */
.sp-source-label {
  font-size: 0.8rem; color: #777;
  margin: 0.8rem 0 0.3rem; font-weight: 600;
}
.sp-source-label:first-child { margin-top: 0; }
.sp-data-link { font-size: 0.95rem; margin-bottom: 5px; }
.sp-data-link a { color: #2d7dd2; text-decoration: none; }
.sp-data-link a:hover { text-decoration: underline; }

/* Reference block */
.sp-ref {
  font-size: 0.95rem; line-height: 1.7; color: #222;
  padding: 0.75rem 1rem;
  background: #f5f4f0;
  border-radius: 6px;
  border-left: 2px solid #bbb;
  margin-bottom: 0.6rem;
}
.sp-ref a { color: #2d7dd2; font-size: 0.85rem; }

body h1 { display: none; }
</style>

<script>
function spTab(btn, panelId) {
  var tabBar = btn.parentElement;
  tabBar.querySelectorAll('.sp-tab-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
  var panel = tabBar.nextElementSibling;
  while (panel && panel.classList.contains('sp-tab-panel')) {
    panel.classList.remove('active');
    panel = panel.nextElementSibling;
  }
  document.getElementById(panelId).classList.add('active');
}
</script>

<div class="sp-header">
  <img src="{{ site.baseurl }}/images/especie_Allobates_niputidea.png" alt="Allobates niputidea">
  <h2><i>Allobates niputidea</i></h2>
  <span class="sp-author">Grant, Acosta-Galvis, and Rada, 2007</span>
</div>

<div class="sp-section-label">Señal acústica</div>

<div class="sp-tabs">
  <button class="sp-tab-btn active" onclick="spTab(this,'Espectro')">Espectrograma</button>
  <button class="sp-tab-btn" onclick="spTab(this,'fig')">Figura</button>
</div>
<div id="Espectro" class="sp-tab-panel active">
  <video width="100%" height="auto" controls>
    <source src="{{ site.baseurl }}/Espectrograms/dyna_Allobates_niputidea.mp4" type="video/mp4">
    Tu navegador no soporta el elemento de video.
  </video>
</div>
<div id="fig" class="sp-tab-panel">
  <img class="sp-spec-img" src="{{ site.baseurl }}/images/spec_Allobates_niputidea.png" alt="spectrograma">
</div>

<div class="sp-section-label">Disponibilidad de datos</div>

<div class="sp-tabs">
  <button class="sp-tab-btn active" onclick="spTab(this,'dat')">Datos</button>
  <button class="sp-tab-btn" onclick="spTab(this,'pubs')">Publicaciones</button>
</div>
<div id="dat" class="sp-tab-panel active">
  <div class="sp-source-label">Disponibles en CSA-IAVH</div>
  <div class="sp-data-link"><a href="http://colecciones.humboldt.org.co/rec/sonidos/IAvH-CSA-18218/IAvH-CSA-18218.wav" target="_blank">IAVH-CSA-18218</a></div>
  <div class="sp-data-link"><a href="http://colecciones.humboldt.org.co/rec/sonidos/IAvH-CSA-18222/IAvH-CSA-18222.wav" target="_blank">IAVH-CSA-18222</a></div>
  <div class="sp-source-label">Disponibles en Figshare</div>
  <div class="sp-source-label">Chaves-Portilla, G. (2024). <i>Allobates niputidea</i>. Figshare. Media.</div>
  <div class="sp-data-link"><a href="https://doi.org/10.6084/m9.figshare.27640602.v2" target="_blank">https://doi.org/10.6084/m9.figshare.27640602.v2</a></div>
</div>
<div id="pubs" class="sp-tab-panel">
  <div class="sp-ref"><strong>Ospina-L, A.M., Murillo-Bedoya, D., García-Cobos, D., Colón-Piñeiro, Z., Acosta-Galvis, A.R. </strong>2019. The advertisement call of <i>Allobates niputidea</i> (Anura: Aromobatidae). <i>Zootaxa</i> 4656: 196-200. 
  <a href="https://doi.org/10.11646/zootaxa.4656.1.14" target="_blank">https://doi.org/10.11646/zootaxa.4656.1.14</a></div>
</div>
