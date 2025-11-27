import React from 'react';
import "./Produits.scss";
import { image } from '../../autres/data';

const Produis = () => {
  return (
    <div className='sous-conteneur-produits'>
        <span className="titre">Les meilleurs Fruits et Legumes </span>
        <h2 className='sous-titre'>Les fruits et legumes les plus achetes dans notre boutique</h2>
        <div className="conteneur-slide">

            
            <div className="suivi-slide">
                <div className="carte-article">
                    <img src={image.home4} alt="" />
                    <div className="details">
                        <span className="prix">
                            1000<span>FCFA</span>
                        </span>
                        <h4 className="nom">Ananas</h4>
                        <p className="description">
                            L'un des fruits les plus acheter au Benin
                        </p>
                    </div>
                </div>
                <div className="carte-article">
                    <img src={image.home5} alt="" />
                    <div className="details">
                        <span className="prix">
                            2000<span>FCFA</span>
                        </span>
                        <h4 className="nom">Pasteque</h4>
                        <p className="description">
                            Un fruit qui hydrate beaucoup
                        </p>
                    </div>
                </div>
                <div className="carte-article">
                    <img src={image.home6} alt="" />
                    <div className="details">
                        <span className="prix">
                            600<span>FCFA</span>
                        </span>
                        <h4 className="nom">Raison</h4>
                        <p className="description">
                            Un fruit Honctueux
                        </p>
                    </div>
                </div>
                <div className="carte-article">
                    <img src={image.home7} alt="" />
                    <div className="details">
                        <span className="prix">
                            1000<span>FCFA</span>
                        </span>
                        <h4 className="nom">Raison</h4>
                        <p className="description">
                            Un fruit qui est asser sucrer pour diversifier
                        </p>
                    </div>
                </div>               
            </div>
                      
                        
                        
            <div className="suivi-slide">
                <div className="carte-article">
                    <img src={image.home4} alt="" />
                    <div className="details">
                        <span className="prix">
                            1000<span>FCFA</span>
                        </span>
                        <h4 className="nom">Ananas</h4>
                        <p className="description">
                            L'un des fruits les plus acheter au Benin
                        </p>
                    </div>
                </div>
                <div className="carte-article">
                    <img src={image.home5} alt="" />
                    <div className="details">
                        <span className="prix">
                            2000<span>FCFA</span>
                        </span>
                        <h4 className="nom">Pasteque</h4>
                        <p className="description">
                            Un fruit qui hydrate beaucoup
                        </p>
                    </div>
                </div>
                <div className="carte-article">
                    <img src={image.home6} alt="" />
                    <div className="details">
                        <span className="prix">
                            600<span>FCFA</span>
                        </span>
                        <h4 className="nom">Raison</h4>
                        <p className="description">
                            Un fruit Honctueux
                        </p>
                    </div>
                </div>
                <div className="carte-article">
                    <img src={image.home7} alt="" />
                    <div className="details">
                        <span className="prix">
                            1000<span>FCFA</span>
                        </span>
                        <h4 className="nom">Raison</h4>
                        <p className="description">
                            Un fruit qui est asser sucrer pour diversifier
                        </p>
                    </div>
                </div>               
            </div>




        </div>
    </div>
  )
}

export default Produis