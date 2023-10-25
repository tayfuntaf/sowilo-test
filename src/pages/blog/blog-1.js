import { useTranslation } from "react-i18next";

// data
import { posts, menus, footerMenus } from "@/common/data";

// import components
import { Header, Footer, Section, Container, Row, Col, Heading, Badge, Post, Breadcrumbs, Pagination } from "@/components";

export default function Blog(){
	const { t } = useTranslation();

	const PageTitle = () => {
		return (
			<Section className="pt-48">
				<Container>
					<div>
					<Badge custom={true ? 1 : 0} className="mb-8" model="model-1" title={`${t("About Me")}`} />
						<Heading className="max-w-xl mb-10" titleprops={{ className: "font-bold mb-4" }}>
							<h1 className="font-2 font-bold">{t("I am Freelance Creative UI/UX Designer")}</h1>
						</Heading>
					</div>
				</Container>
			</Section>
		);
	};

	const Blog = (props) => {
		const { data = [] } = props;
		const posts = data;

		if (!posts.length) {
			return;
		}

		return (
			<Section className="pt-8 lg:pt-16 pb-8 lg:pb-16 lg:pt-32 lg:pb-32">
				<Container>
					<div>
						<Row size="lg">
							{posts.slice(0, 6).map((post, postIndex) => (
								<Col lg={4} key={`post-item-${postIndex}`}>
										<Post {...post} className="mb-12 lg:mb-0" imageprops={{ className: "absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out group-hover:opacity-30 group-hover:scale-110 object-fit object-cover", width: 600, height: 600 }} titleprops={{ className: "text-3xl font-2 font-bold mb-8" }} categoryprops={{ className: "flex items-center list-none text-xs text-uppercase tracking-widest mt-8 mb-6" }} coverprops={{ className: "radius-none bg-black overflow-hidden relative pt-[100%]" }} />
								</Col>
							))}
						</Row>
						<Pagination model="style-1" className="text-sm pt-8 lg:pt-16" />
					</div>
				</Container>
			</Section>
		);
	};

	return (
		<>
			<Header className="top-0 left-0 w-full h-28 text-md font-bold absolute z-50" logo="Atena." menus={menus} search={1} languages={1} model="model-1" logoprops={{ className: "text-2xl font-bold" }} />
			<PageTitle />
			<Blog data={posts} />
			<Footer menus={footerMenus} className="h-24 flex items-center text-sm" />
		</>
	);
};
