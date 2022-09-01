
import React from "react";


const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [yukleniyor, yuklenmeyiAyarala] = React.useState(true);
  const [meslekler, meslekleriGuncelle] = React.useState([]);
  const [deger, degerGuncelle] = React.useState(0);

      const  fetchmeslekler = async () =>{
        const response = await fetch(url);
        const yeniMeslekler = await response.json()
        meslekleriGuncelle(yeniMeslekler)
        yuklenmeyiAyarala(false)
      };


     React.useEffect(() =>{
      fetchmeslekler()
     }, []);
      if(yukleniyor){
        return(
          <section className="section-yukleniyor">
<h1>Looading...</h1>
          </section>
        );
      }

      const {company, dates, duties, title} = meslekler[deger]



  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="meslekler-merkez">
        <div className="btn-container">
          {meslekler.map((item, index) =>{
            return(
              <button key={item.id} 
              onClick={() => degerGuncelle(index)}
              className= {`job-btn ${index === deger && 'active-btn'}`}>
                {item.company}
              </button>
            )
          })};

<article className="meslek-bilgi">
  <h3>{title}</h3>
  <h4>{company}</h4>
<p className="meslek-tarih">{dates}</p>
{ duties.map((duty, index) =>{
  return(
    <div key={index} className="meslek-aciklama">
    
      <p>{duty}</p>
    </div>
  );
})}

</article>

        </div>
        <button type="button" className="btn">more info</button>
      </div>

    </section>
 
  );
}

export default App;
