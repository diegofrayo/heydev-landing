import React, {
	Component
} from 'react';

import Contact from 'components/sections/Contact.jsx';
// import Header from 'components/sections/Header.jsx';
import Portfolio from 'components/sections/Portfolio.jsx';
import Profiles from 'components/sections/Profiles';
import Services from 'components/sections/Services.jsx';

export default class Home extends Component {

	constructor() {

		super();

		this.state = {
			people: [{
				description: 'Smart Guy in React',
				imgSrc: 'app/assets/images/profiles/alejandro.jpg',
				name: 'Alejandro Baez Arcila'
			}, {
				description: 'Smart Guy in Angular',
				imgSrc: 'app/assets/images/profiles/diego.jpg',
				name: 'Diego Rayo'
			}],
			services: [{
				icon: 'fa fa-code fa-3x',
				text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
				title: 'Backend Solutions'
			}, {
				icon: 'fa fa-code fa-3x',
				text: 'It was popularised in the 2000s with the release of Internet sheets containing Lorem Ipsum passages',
				title: 'Frontend Solutions'
			}],
			techStack: [{
				src: 'app/assets/images/tech-stack/angular.png',
				title: 'Angular.js'
			}, {
				src: 'app/assets/images/tech-stack/node.png',
				title: 'Node.js'
			}, {
				src: 'app/assets/images/tech-stack/react.png',
				title: 'React.js'
			}, {
				src: 'app/assets/images/tech-stack/HTML5.png',
				title: 'HTML5'
			}, {
				src: 'app/assets/images/tech-stack/js.png',
				title: 'Javascript'
			}, {
				src: 'app/assets/images/tech-stack/bootstrap.png',
				title: 'Bootstrap'
			}, {
				src: 'app/assets/images/tech-stack/redux-logo.png',
				title: 'Redux'
			}],
			projects: [{
				description: 'app movil',
				imgSrc: 'img url',
				link: 'festa.co',
				name: 'Festa',
				techStack: 'angular, js, bootstrap, firebase'
			}, {
				description: 'desc',
				imgSrc: 'img url',
				link: 'https://app.workep.com/',
				name: 'Workep',
				techStack: 'react, node'
			}]
		};
	}

	render() {
		return (
			<div>
				{/* <Header /> */}
				<Profiles profiles={this.state.people} />
				<Services services={this.state.services} techStack={this.state.techStack} />
				<Portfolio projects={this.state.projects} />
				<Contact />
			</div>
		);
	}
}