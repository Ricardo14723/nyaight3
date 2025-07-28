         document.write(`
<!--Sección de Descarga-->
<div class="download-container">
    <!--Header-->
    <div class="series-header">
        <div class="series-icon">⬇</div>
        <div class="series-info">
            <h1>Enlaces de Descarga - Nyaight of the Living Cat</h1>
            <p>Audio Latino, Japones e Inglés</p>
        </div>
    </div>

    <!--Pestañas-->
    <div class="tabs-container">
        <button class="tab-button active" onclick="showSeason(1)">Temporada 1</button>
    </div>

    <!--Temporada 1-->
    <div class="tab-content active" id="season-1">
        <div class="season-info">
            <div class="season-title">📺 Primera Temporada</div>
            <div class="season-specs">
                <div class="season-spec">
                    <div class="spec-label">AUDIO</div>
                    <div class="spec-value">Latino AAC 2.0</div><div class="spec-value">Ingles AAC 2.0</div><div class="spec-value">Japones AAC 2.0</div></div><div class="season-spec"><div class="spec-label">FORMATO</div>
                    <div class="spec-value">MKV</div>
                </div>
                <div class="season-spec">
                    <div class="spec-label">PESO TEMPORADA</div>
                    <div class="spec-value">? GB</div>
                </div>
                <div class="season-spec">
                    <div class="spec-label">RESOLUCIÓN</div>
                    <div class="spec-value">1920 x 1080</div>
                </div>
            </div>
        </div>

        <div class="episodes-grid">
            <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">1-2</div>
                    <h3 class="episode-title">Episodios 1 y 2</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO</div>
                        <div class="episode-spec-value">718 MB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~49 min
                      </div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/Ny4GHt2" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>

            <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">3-4</div>
                    <h3 class="episode-title">Episodios 3 y 4. (Sub Español)</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO</div>
                        <div class="episode-spec-value">563 MB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~48 min</div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/Ny4GHt4" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>

        <!--<div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">7-9</div>
                    <h3 class="episode-title">Episodios 7, 8 y 9</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO&nbsp;</div>
                        <div class="episode-spec-value">1.13 GB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~75 min</div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/Wh1W4c7" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>
          

           <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">10-12</div>
                    <h3 class="episode-title">Episodios 10, 11 y 12</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO</div>
                        <div class="episode-spec-value">1.25 GB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~75 min</div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/Wh1W4tcH10" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>
          
          
           <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">13</div>
                    <h3 class="episode-title">Episodio 13</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO</div>
                        <div class="episode-spec-value">474 MB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~25 min</div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/Wh1W4tcH13" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>-->
                                
                      
        </div>
    </div>

  <!--Contraseña-->
    <div class="password-section">
        <div class="password-header">
            <span class="password-icon">🔐</span>
            <h3 class="password-title">Contraseña del Archivo</h3>
        </div>
        <div class="password-container">
            <input class="password-text" readonly="" type="text" value="mymoviesplayseries" />
            <button class="copy-button" onclick="copyPassword()">
                <span id="copy-text">📋 Copiar</span>
            </button>
        </div>
    </div>
</div>
`);

  