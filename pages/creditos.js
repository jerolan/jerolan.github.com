import Page from "../components/Page";

export default function Credits() {
  return (
    <Page.Html title="Créditos" description="Recursos visuales y fuentes">
      <section className="aero-panel">
        <h2 className="panel-heading">Detrás de este rincón de internet</h2>
        <div className="credits-content">
          <h1>Créditos y fuentes</h1>
          <p>
            Este sitio toma inspiración de los portales y foros de los años 2000
            y de la estética Frutiger Aero.
          </p>
          <h2>Frutiger Aero Archive</h2>
          <p>
            Gracias a{" "}
            <a href="https://frutigeraeroarchive.org/">Frutiger Aero Archive</a>{" "}
            por preservar y compartir los recursos de esta época. El fondo y la
            cabecera proceden de su{" "}
            <a href="https://frutigeraeroarchive.org/wallpapers">
              archivo de wallpapers
            </a>
            .
          </p>
          <ul>
            <li>
              Cabecera:{" "}
              <a href="https://frutigeraeroarchive.org/wallpapers/material_dictionary_178#materialDictionary178">
                Material Dictionary 178: Eco Images – Greenery, Water &amp; Air
                (2006)
              </a>
              , imagen 4. Colección de Image Navi Corporation; subida al archivo
              por ShivaShaw.{" "}
              <a href="https://frutigeraeroarchive.org/images/wallpapers/materialdictionary178/materialdictionary178_4.jpg">
                Ver imagen original
              </a>
              .
            </li>
            <li>
              <a href="https://frutigeraeroarchive.org/images/backgrounds/longhorn.jpg">
                Fondo de césped, usado por el archivo
              </a>
              .
            </li>
            <li>
              <a href="https://frutigeraeroarchive.org/resources#iconPacks">
                Sección de recursos e iconos del archivo
              </a>
              .
            </li>
          </ul>
          <h2>Icono de notas</h2>
          <p>
            El icono de los artículos procede de la{" "}
            <a href="https://frutigeraeroarchive.org/icons/ios_skeuomorphic#iosSkeuomorphic">
              galería de iconos skeuomórficos de iOS
            </a>{" "}
            del archivo.{" "}
            <a href="https://frutigeraeroarchive.org/images/icons/mobile/ios/notes.png">
              Archivo original
            </a>
            .
          </p>
          <p>
            El archivo preserva estos fondos e iconos con fines documentales y
            educativos. Sus derechos pertenecen a sus respectivos titulares; no
            se presentan como recursos de dominio público.
          </p>
          <h2>Iconos Oxygen</h2>
          <p>
            Iconos de{" "}
            <a href="https://github.com/KDE/oxygen-icons">Oxygen, de KDE</a>,
            encontrados en la sección de recursos del archivo. Se conservan sin
            modificaciones, bajo su licencia{" "}
            <a href="/images/aero/oxygen/COPYING">LGPL-3.0-or-later</a>, con los{" "}
            <a href="/images/aero/oxygen/AUTHORS">créditos de sus autores</a>.
          </p>
          <h2>Tipografías</h2>
          <p>
            Liberation Sans y Liberation Mono, distribuidas bajo{" "}
            <a href="/fonts/LICENSE.txt">SIL Open Font License 1.1</a>.
          </p>
          <p>
            Los textos y artículos son de Jerome Olvera. Los créditos de cada
            recurso pertenecen a sus respectivos autores.
          </p>
        </div>
      </section>
    </Page.Html>
  );
}
