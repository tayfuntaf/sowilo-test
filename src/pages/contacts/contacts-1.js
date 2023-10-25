import { useTranslation } from "react-i18next";

// import data
import { menus, footerMenus } from "@/common/data";
import { AiOutlinePhone } from "react-icons/ai";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

// import components
import {
  Header,
  Footer,
  Section,
  Container,
  Row,
  Col,
  Heading,
  Button,
  Badge,
  Label,
  Input,
} from "@/components";

export default function Contacts() {
  const { t } = useTranslation();

  const PageTitle = () => {
    return (
      <></>
      // <Section className="pt-48 pb-16 lg:pb-32">
      // 	<Container>
      // 		<div>
      // 		<Badge custom={true ? 1 : 0} className="mb-8" model="model-1" title={`${t("About Me")}`} />
      // 			<Heading className="max-w-xl mb-10" titleprops={{ className: "font-bold mb-4" }}>
      // 				<h1 className="font-2 font-bold">{t("I am Freelance Creative UI/UX Designer")}</h1>
      // 			</Heading>
      // 		</div>
      // 	</Container>
      // </Section>
    );
  };

  const Contacts = () => {
    return (
      <Section className="bg-transparent text-white overflow-hidden ">
        <Row className="items-stretch">
          <Col lg={7} className="relative">
            <div className=" top-0 left-0 w-full h-full absolute">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12769.259447076996!2d30.7394944!3d36.8588816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39bad2468eae7%3A0xcd44cac679b67351!2sSowilo%20Beauty%20Aesthetics!5e0!3m2!1str!2str!4v1698147457066!5m2!1str!2str"
                width="100%"
                height="100%"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              ;
            </div>
          </Col>
          <Col lg={5} className=" bg-white text-gray-900">
            <div className=" pt-36 pb-36 px-4 lg:px-24">
              <Heading
                className="max-w-sm"
                titleprops={{
                  className: "text-gray-900 font-1 text-xl font-bold mb-16",
                }}
                title={t("Bizimle İletişime Geçin")}
              />

              <div className="">
                <Row size="md">
                  <Col
                    sm={12}
                    className="flex flex-col  text-center gap-2  border-solid border-2 rounded-md p-4 border-pink-700"
                  >
                    <h3 className="text-center align-middle">
                      Telefon Numaramız
                    </h3>
                    <a href="tel:+905161664323">0516 166 43 23</a>
                    <h3 className="flex justify-center">
                      <AiOutlinePhone className="border-solid border-2 rounded-full border-pink-700 bg-pink-700 text-white justify-center h-9 w-9 p-1" />
                    </h3>
                  </Col>
                  {/* <Col sm={6}>
										<Label htmlFor="email">{t("Email")}</Label>
										<Input id="email" type="email" />
									</Col> */}
                  <Col
                    sm={12}
                    className=" flex flex-col justify-center gap-2 border-solid border-2 rounded-md p-4 border-pink-700"
                  >
                    <h3 className="flex justify-center">
                      Sosyal Medya Hesaplarımız
                    </h3>
                    <div className="flex flex-row justify-center gap-5">
                      <a
                        className="flex justify-center"
                        href="https://www.instagram.com/sowilobeauty/"
                      >
                        <FaInstagram className="text-3xl border-solid border-2 rounded-full border-pink-700 bg-pink-700 text-white h-9 w-9 p-1 cursor-pointer" />
                      </a>
                      <a
                        className="flex justify-center"
                        href="https://www.facebook.com"
                      >
                        <FaFacebookF className="text-3xl border-solid border-2 rounded-full border-blue-900 bg-blue-900 text-white h-9 w-9 p-1 cursor-pointer" />
                      </a>
                    </div>
                  </Col>
                  {/* <Col xs={12}>
                    <Label htmlFor="message">{t("Message")}</Label>
                    <Input
                      type="textarea"
                      id="message"
                      name="message"
                      cols="30"
                      rows="5"
                    />
                  </Col>
                  <Col xs={12}>
                    <Button custom={true ? 1 : 0} size="sm" color="primary">
                      {t("Send Message")}
                    </Button>
                  </Col> */}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Section>
    );
  };

  return (
    <>
      <Header
        className="top-0 left-0 w-full h-28 text-md font-bold absolute z-50  bg-gradient-to-l from-pink-400 to-pink-700 to-40% p-4 text-white"
        logo="Atena."
        menus={menus}
        search={1}
        languages={1}
        model="model-1"
        logoprops={{ className: "text-2xl font-bold" }}
      />
      <PageTitle />
      <div
        style={{
          height: "100vh",
          marginTop: "8%",
        }}
      >
        <Contacts />
      </div>
      <Footer
        menus={footerMenus}
        className="h-28 flex items-center text-sm bg-gradient-to-l from-pink-400 to-pink-700 to-40% p-4 text-white"
      />
    </>
  );
}

// const googleMap = {
//   src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12769.259447076996!2d30.7394944!3d36.8588816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39bad2468eae7%3A0xcd44cac679b67351!2sSowilo%20Beauty%20Aesthetics!5e0!3m2!1str!2str!4v1698145490404!5m2!1str!2str",
//   title: "",
//   label: "",
//   tabindex: "0",
//   "aria-label": "Sowilo Beauty Aesthetics",
//   title: "Sowilo Beauty Aesthetics",
//   frameborder: "0",
//   allowfullscreen: "false",
//   style: {
//     width: "100%",
//     height: "100%",
//     filter:
//       "brightness( 100% ) contrast( 100% ) saturate( 0% ) blur( 0px ) hue-rotate( 0deg )",
//   },
// };
