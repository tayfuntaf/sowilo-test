import Image from "next/image";
import { useTranslation } from "react-i18next";

// import images
import storyImage1 from "@/assets/images/other/v-image-1.jpg";
import storyImage2 from "@/assets/images/other/l-image-1.jpg";

// import data
import { menus, footerMenus, services } from "@/common/data";

// import components
import {
  Header,
  Footer,
  Section,
  Container,
  Row,
  Col,
  Heading,
  Badge,
  InfoBox,
} from "@/components";

export default function Services() {
  const { t } = useTranslation();

  const Services = (props) => {
    const { data = [] } = props;
    const services = data;

    if (!services.length) {
      return;
    }

    return (
      <Section className="pt-48 pb-16 lg:pb-32">
        <Container>
          <div className="text-center">
            <Badge
              custom={true ? 1 : 0}
              className="mb-8"
              model="model-1"
              title={t("About Me")}
            />
            <Heading
              className="max-w-xl mx-auto mb-10"
              titleprops={{ className: "font-bold mb-4" }}
            >
              <h1 className="font-2 font-bold">
                {t("I am Freelance Creative UI/UX Designer")}
              </h1>
            </Heading>
          </div>
          <div>
            <Row size="md">
              {services.map((service, serviceIndex) => (
                <Col md={6} lg={4} key={`services-item-${serviceIndex}`}>
                  <InfoBox
                    custom={true ? 1 : 0}
                    className="pt-20 px-12 pb-12"
                    color="primary"
                    icon={service.icon}
                    title={t(service.title)}
                    text={t(service.text)}
                    iconprops={{
                      className:
                        "w-16 h-16 text-white font-bold flex items-center justify-center rounded-full mb-12",
                      style: {
                        backgroundColor: `rgba(${service.color}, 1)`,
                        boxShadow: `0 12px 18px -14px rgba(${service.color}, 1)`,
                      },
                    }}
                    titleprops={{ className: "text-3xl font-2 font-bold mb-4" }}
                    textprops={{ className: "text-gray-600" }}
                    style={{
                      borderRadius: 18,
                      boxShadow: `0px 12px 18px -14px rgba(${service.color}, .45)`,
                    }}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </Section>
    );
  };

  const Story1 = () => {
    return (
      <Section className="pt-32 pb-16 lg:pb-32 bg-black">
        <Container>
          <Row>
            <Col md={6} className="lg:pr-12 mb-5 md:mb-0">
              <div className="lg:pr-16">
                <Image
                  src={storyImage1}
                  alt="Story"
                  className="rounded-xl xs:w-full sm:w-full"
                />
              </div>
            </Col>
            <Col md={6}>
              <Badge
                custom={true ? 1 : 0}
                className="mb-8"
                color="white"
                model="model-1"
                title={t("About Me")}
              />
              <Heading
                className="max-w-lg mb-10 lg:mb-24"
                titleprops={{ className: "text-white font-2 font-bold mb-8" }}
                title={t("Level Up Your Digital Marketing")}
                text={t(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                )}
                textprops={{ className: "text-white" }}
              />
              <Image
                src={storyImage2}
                alt="Story"
                className="rounded-xl xs:w-full sm:w-full relative"
              />
            </Col>
          </Row>
        </Container>
      </Section>
    );
  };

  return (
    <>
      <Header
        className="top-0 left-0 w-full h-28 text-md font-bold absolute z-50"
        logo="Atena."
        menus={menus}
        search={1}
        languages={1}
        model="model-1"
        logoprops={{ className: "text-2xl font-bold" }}
      />
      <Services data={services} />
      <Story1 />
      <Footer
        menus={footerMenus}
        className="h-24 flex items-center text-sm text-white bg-black border-gray-900"
      />
    </>
  );
}
