import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

// import images

import postImage1 from "../../../public/assets/images/blog/sowilo.jpg";
import image2 from "../../../public/assets/images/other/unnamed.webp";

import { menus, footerMenus, testimonials } from "@/common/data";

// import components
import {
  Header,
  Footer,
  Section,
  Container,
  Row,
  Col,
  Heading,
  Carousel,
  CarouselDots,
  Badge,
  Testimonial,
  InfoBox,
} from "@/components";

export default function AboutUs() {
  const { t } = useTranslation();

  const PageTitle = () => {
    return (
      <Section className="pt-4 pb-16 lg:pb-0">
        <Container>
          {/* <div>
						<Badge custom={true ? 1 : 0} className="mb-8" model="model-1" title={t("About Me")} />
						<Heading className="max-w-xl mb-10" titleprops={{ className: "font-bold mb-4" }}>
							<h1 className="font-2 font-bold">{t("I am Freelance Creative UI/UX Designer")}</h1>
						</Heading>
					</div> */}
        </Container>
      </Section>
    );
  };

  const Story1 = () => {
    return (
      <Section className="relative overflow-hidden">
        <div className="h-full lg:w-2/5 xl:w-1/2 lg:absolute right-0">
          <Image
            src={postImage1}
            alt="Story"
            className="h-full w-full object-cover"
          />
        </div>
        <Container>
          <Row>
            <Col md={12} lg={7} xl={6}>
              <div className="relative xl:-left-12 flex items-center xl:pr-20 py-20 lg:py-40">
                <div>
                  <Heading className="max-w-lg mb-12">
                    <h2 className="font-1 font-bold mb-8 mt-10">
                      {t("Hakkımızda")}
                    </h2>
                    <p className="mb-8">
                      {t(
                        "Bulunduğumuz bölgede hizmet kalitemizi kanıtlamış olarak, tecrübeli çalışanlarımız, güleryüzlü hizmet anlayışımız ile siz değerli müşterilerimizi en iyi şekilde ağırlarız. Tüm işlemlerimizde hijyene, kaliteli ürün kullanımına ekstra özen gösteririz. En yeni cihazlar ile sağlığınız ve güzelliğinize gerekli önemi veririz."
                      )}
                    </p>
                    <Row>
                      <Col>
                        {/* <InfoBox custom={true ? 1 : 0} className="pl-8 border-l rounded-none" color="primary" type="a" icon="" title={"10+"} text={t("Years Experience")} titleprops={{ className: "text-3xl text-primary font-bold mb-2" }} textprops={{ className: "text-gray-600" }} /> */}
                      </Col>
                      <Col>
                        <InfoBox
                          custom={true ? 1 : 0}
                          className="pl-8 border-l rounded-none"
                          color="primary"
                          type="a"
                          icon=""
                          title={"144+"}
                          text={t("Happy Customer")}
                          titleprops={{
                            className: "text-3xl text-primary font-bold mb-2",
                          }}
                          textprops={{ className: "text-gray-600" }}
                        />
                      </Col>
                    </Row>
                  </Heading>
                </div>
              </div>
            </Col>
            <Col md={12} lg={5} xl={6}></Col>
          </Row>
        </Container>
      </Section>
    );
  };

  const Story2 = () => {
    return (
      <Section className="relative overflow-hidden">
        <div className="h-full lg:w-2/5 xl:w-1/2 lg:absolute">
          <Image src={image2} alt="Story" className="h-full object-cover" />
        </div>
        <Container>
          <Row>
            <Col md={12} lg={5} xl={6}></Col>
            <Col md={12} lg={7} xl={6}>
              <div className="relative xl:-right-12 flex items-center xl:pl-20 py-20 lg:py-40">
                <div>
                  <Heading className="max-w-lg mb-12">
                    <h2 className="font-1 font-bold mb-8">
                      {t("Sizler İçin Özenle Verdiğimiz Hizmetlerimiz")}
                    </h2>
                    <p className="mb-8">
                      {t(
                        "Bölgesel Zayıflama, Cilt Bakımı, Lazer Epilasyon, Dövme Silme, Kalıcı Makyaj, El-Ayak Bakımı, NailArt ..."
                      )}
                    </p>
                    <Row>
                      <Col>
                        {/* <InfoBox custom={true ? 1 : 0} className="pl-8 border-l rounded-none" color="primary" type="a" icon="" title={"10+"} text={t("Years Experience")} titleprops={{ className: "text-3xl text-primary font-bold mb-2" }} textprops={{ className: "text-gray-600" }} /> */}
                      </Col>
                      <Col>
                        <InfoBox
                          custom={true ? 1 : 0}
                          className="pl-8 border-l rounded-none"
                          color="primary"
                          type="a"
                          icon=""
                          title={"144+"}
                          text={t("Happy Customer")}
                          titleprops={{
                            className: "text-3xl text-primary font-bold mb-2",
                          }}
                          textprops={{ className: "text-gray-600" }}
                        />
                      </Col>
                    </Row>
                  </Heading>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    );
  };

  const Testimonials = (props) => {
    const { data = [] } = props;

    if (!data.length) {
      return;
    }

    return (
      <Section className="overflow-hidden pt-16 lg:pt-32 pb-16 lg:pb-32">
        <Container fluid>
          <div className="text-center mb-12 ">
            <Fade cascade triggerOnce>
              <Badge
                custom={true ? 1 : 0}
                className="mb-8"
                model="model-1"
                title={t("Testimonial")}
              />
              <Heading
                className="max-w-lg mx-auto"
                titleprops={{ className: "font-2 font-bold mb-10 lg:mb-20" }}
                title={t("Müşterimizden Bizimle İlgili Özel Sözler")}
              />
            </Fade>
          </div>
          <div className="relative">
            <Carousel
              loop={true}
              autoplay={true}
              centeredSlides={true}
              spaceBetween={3}
              slidesPerView="auto"
              pagination={{
                el: "#afc-swiper-dots--testimonial",
                clickable: true,
              }}
              breakpoints={{
                0: {
                  spaceBetween: 0,
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 2,
                },
                1300: {
                  slidesPerView: 3,
                },
              }}
            >
              {data.map((item, index) => (
                <SwiperSlide key={`testimonial-carousel-slide-${index}`}>
                  <Testimonial
                    custom={true ? 1 : 0}
                    className="afc-testimonial rounded-2xl p-6 lg:p-12"
                    title={item.title}
                    text={t(item.text)}
                    titleprops={{ className: "font-bold mt-9 mb-2" }}
                    avatarprops={{
                      width: 75,
                      height: 75,
                      className: "rounded-full mb-9",
                      placeholder: "blur",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Carousel>
            <CarouselDots
              id="afc-swiper-dots--testimonial"
              className="afc-swiper-dots afc-swiper-dots--classic text-center absolute -bottom-16 pt-10"
            />
          </div>
        </Container>
      </Section>
    );
  };

  return (
    <>
      <Header
        className="top-0 left-0 w-full h-28 text-md font-bold absolute z-50 bg-gradient-to-l from-pink-400 to-pink-700 to-40% p-4 text-white"
        logo="Atena."
        menus={menus}
        search={1}
        languages={1}
        model="model-1"
        logoprops={{ className: "text-2xl font-bold" }}
      />
      <PageTitle />
      <Story1 />
      <Story2 />
      <Testimonials data={testimonials} />
      <Footer
        menus={footerMenus}
        className="h-24 flex items-center text-sm bg-gradient-to-l from-pink-400 to-pink-700 to-40% p-4 text-white"
      />
    </>
  );
}
