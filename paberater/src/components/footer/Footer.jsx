import "./Footer.css"
import Logo from "../../assets/img/Logos/LOGO-BLANCO.svg";
import IntagramLogo from "../../assets/icons/logo_instagram.svg";
import YoutubeLogo from "../../assets/icons/logo_youtube.svg";
import FacebookLogo from "../../assets/icons/logo_facebook.svg";
import EmailIcon from "../../assets/icons/IconsmsIcon.svg";
import PhoneIcon from "../../assets/icons/IconPhone.svg";
import LocalIcon from "../../assets/icons/localitation.svg";
import WhatsAppIcon from "../../assets/icons/whatsapp_blue.svg";
import PhoneBlue from "../../assets/icons/phone_blue.svg";
import Mailblue from "../../assets/icons/mail_blue.svg";




function Footer() {
  return (
    <>
      <section className="pinedaFooter">
        <img src={Logo} alt="logo" className="logoPaberater" />
        <div className="socialMediaFooter">
          <img src={IntagramLogo} alt="" className="IconSocialFooter" />
          <a href="https://www.instagram.com/paberater_/?hl=es"></a>
          <img src={YoutubeLogo} alt="" className="IconSocialFooterYT" />
          <a href="https://www.youtube.com/channel/UCmUbZw_CJqf-pM0-pHI6meg"></a>
          <img src={FacebookLogo} alt="" className="IconSocialFooter" />
          <a href="https://www.facebook.com/PABerater/?locale=de_DE"></a>
        </div>

        <div className="contactFooter">
          <div className="infoFooter">
            <img src={EmailIcon} alt="" className="IconsFooter"/>
            <a href="/contacto">info@paberater.de</a>
          </div>
          <div className="infoFooter">
            <img src={PhoneIcon} alt="" className="IconsFooter"/>
            <a href="tel:+4915780633091">+49 157 806 33091</a>
          </div>
          <div className="infoFooter">
            <img src={LocalIcon} alt="" className="IconsFooter"/>
            <a href="https://www.google.com/maps/dir/40.3800498,-3.7739879/paberater-de/@45.9383877,-5.6762452,5z/
            ">PABerater GmbH, <br />Waltersdorfer Ch 203,<br />12355 Berlin, Alemania </a>
          </div>
        </div>
      </section>

        <section className="politics">
        <div className= "paberater-rights">
        <p style={{margin:"0.7rem"}}>© 2023 PABerater GmbH. All Rights Reserved.</p>
        </div>
<div className="groupPolitics">
          <div className= "impressum pol">
          <a href="">Impresum</a>
          </div>
          <div className= "agb pol">
          <a href="">AGB</a>
          </div>
          <div className= "datenschutz pol">
          <a href="">Datenschutz</a>
          </div>
          <div className= "políticas_cookies pol">
          <a href="">Políticas de cookies(UE)</a>
        </div>
        </div>
        </section>


      <section className="cookiesFooter">
        <p>
          Die Rolle von PABerater GmbH besteht darin, als Kommunikationsbrücke
          zwischen unseren Kunden und den Institutionen zu fungieren und ihre
          Anfragen so zu übersetzen, dass sie in der deutschen Sprache
          verstanden werden können. <br /> <br />
          PABerater GmbH leistet selber keine Rechtsberatung.Bitte
          berücksichtigen Sie, dass es sich bei der sachverständigen Durchsicht
          Ihrer Studien- und Arbeitsunterlagen nicht um ein Rechtsgutachten oder
          eine Rechtsberatung im Sinne des Rechtsdienstleistungsgesetzes
          handelt. Eine juristische Aufarbeitung und Einordnung unter Anwendung
          der Rechtsnormen ggf. unter Verwendung dieser Auswertung ist nur durch
          einen zugelassenen Rechtsanwalt zulässig. Wir stellen Ihnen gerne
          einen Kontakt her. <br /> <br />
          
          PABerater GmbH no presta asesoramiento jurídico por
          sí misma.Tenga en cuenta que la revisión pericial de sus documentos de
          estudio y de trabajo no es un dictamen jurídico ni un asesoramiento
          legal en el sentido de la Ley de Servicios Jurídicos. Una revisión y
          clasificación legal utilizando las normas legales, en caso de que sea
          necesario utilizar esta evaluación, sólo está permitida por un abogado
          autorizado. Estaremos encantados de ponerle en contacto con un
          abogado.
        </p>
      </section>

      <section className="contact_footer">
      <div>
        <a href="tel:+4915780633091">
        <img src={PhoneBlue} alt="" className="icons_action" />
        </a> 
        </div>

        <div>
        <a href="mailto:info@paberater.de">
        <img src={Mailblue} alt="" className="icons_action"  />
        </a> 
        </div>

        <div>
        <a href="https://wa.me/491778014367">
        <img src={WhatsAppIcon} alt="" className="icons_action" />
        </a>   
        </div>
      </section>
    </>
  );
}

export default Footer;
