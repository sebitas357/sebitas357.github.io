import ReactPlayer from "react-player";

export default function HeaderBlog(props) {
  const { blog } = props;
  const { title, poster, description, title2, mega, mediafire, youtube } = blog;
  return (
    <main className="margen_superior">
      <div className="container">
        <div className="row">
          {/* */}
          <div className="col-md-12">
            <div className="title text-center">
              <h1 className="mt-3 titlered">{title}</h1>
            </div>
          </div>
          {/* */}
          <div className="col-md-6">
            <img
              src={poster.url}
              alt="imagen tutorial"
              className="imagen_tutoriales img-fluid"
            />
          </div>
          {/* */}
          <div className="col-md-6">
            <h3> {title2} </h3>
            <p>{description}</p>
            <div className="row columna_descarga">
              <div className="col-md-6 videotutorial">
                <a href={mega} target="_blank" rel="noopener noreferrer">
                  <img
                    src="/mega1.jpg"
                    alt="mega"
                    className="mb-2 imagen_descarga"
                  />
                </a>
              </div>
              <div className="col-md-6 videotutorial">
                <a href={mediafire} target="_blank" rel="noopener noreferrer">
                  <img
                    src="/mediafire1.jpg"
                    alt="mediafire"
                    className="mb-2 imagen_descarga"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* */}
          <div className="col-md-12 mt-3">
            <div className="title text-center">
              <h2 className="mt-3 titlered">Mira el video completo</h2>
            </div>
          </div>
          {/* */}
          <div className="col-md-12">
            <div className="videotutorial">
              <ReactPlayer
                url={youtube}
                loop
                playing
                width="70%"
                preload="none"
                controls
                muted
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
