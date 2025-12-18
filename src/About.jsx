import gallery from './gallery.jpg';
import abstractNft from './abstract-nft.jpg';

function About() {
    return <div>
    <div className='header'>
      <h1 className='story-about'>The Story of Our Gallery</h1>
    </div>

    <div className='conteiner-header-left'>
        <h2 className='header-left'>The Legacy of the Digital Age</h2>
    </div>
    <div className='div-paragraph-about'>
        <p className='about-par'>Welcome to Veredian Art — a space born at the intersection of art, technology, and boundless imagination. We are not just a marketplace; we are curators of the legacy being created right now, in the era of the blockchain.</p>
    </div>

   
    <div className='photo-our-gallery'>
        <img src={gallery} width={500}/>
    </div>

     <div className='conteiner-header-right'>
        <h2 className='header-right'>Our Inspiration</h2>
    </div>

    <p className='about-par-right'>
        Our story began with a simple question: How do we preserve and value digital beauty in a world where everything is easily copied? We saw <b>NFT</b> not as a fleeting trend, but as a revolution in copyright and a way to grant artists worldwide the recognition they deserve.Veredian Arts was founded to be a secure and stylish home for these unique digital masterpieces. We believe that great art should be accessible, but its inherent value must remain sacrosanct.
    </p>


    <img src={abstractNft} width={400} className='img-right'/>


    <div className='conteiner-header-left'>
        <h2 className='header-left'>Our Philosophy: Quality and Transparency</h2>
    </div>

    <div className='div-paragraph-about'>
        <p className='about-par'>While other galleries may focus on sheer volume, we are focused on quality and curation.</p>
        <ul>
            <li><b>Curated Selection:</b> Every piece of art you see here—from captivating abstracts and powerful portraits to inspiring landscapes—undergoes a meticulous selection process. We are proud to represent only those works that truly push the boundaries of digital creativity.</li>
            <li><b>Blockchain Transparency:</b> We ensure complete transparency across all transactions, guaranteeing that authorship, ownership history, and price remain clear and verifiable.</li>
            <li><b>Community First:</b> We are building a bridge between collectors seeking uniqueness and artists looking for a reliable platform.</li>
        </ul>
    </div>

    </div>


}

export default About;