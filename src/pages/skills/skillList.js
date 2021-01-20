  
const skillList = [
	// {
	// 	name: 'HTML5',
	// 	value:
	// 		'https://media.discordapp.net/attachments/762721371809382421/793153790260805712/html5-css3.png'
	// },
	
	{
		name: 'React',
		value:
			'https://camo.githubusercontent.com/22045498095171997ccf6a9554672519b9f67898/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f72656163742e737667'
	},
	{
		name: "JavaScript",
         value:'https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png'
         
	},
	{
		name: 'HTML/CSS',
		value:
			'https://media.discordapp.net/attachments/762721371809382421/793153790260805712/html5-css3.png'
	},
	{
		name: "TypeScript", value: 'https://img.flaticon.com/icons/png/512/919/919832.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF'
	},
	
	{
		name: "MongoDB", value: 'https://img.icons8.com/color/452/mongodb.png'
	},
	{
		name: "MySQL/PostgreSQL", value: 'data:image/png;base64,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'
	},
	{
		name: "Django", value: 'https://icon-library.com/images/django-icon/django-icon-0.jpg'
	},
	{
		name: "Firebase", value: 'https://img.icons8.com/color/452/firebase.png'
	},
	
	// {
	// 	name: 'React',
	// 	svgPath:
	// 		'M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z'
	// },
	// {
	// 	name: 'Nodejs',
	// 	svgPath:
	// 		'M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.3,6.63 3,7.15 3,7.71V16.29C3,16.85 3.3,17.37 3.78,17.65L5.73,18.77C6.68,19.23 7,19.24 7.44,19.24C8.84,19.24 9.65,18.39 9.65,16.91V8.44C9.65,8.32 9.55,8.22 9.43,8.22H8.5C8.37,8.22 8.27,8.32 8.27,8.44V16.91C8.27,17.57 7.59,18.22 6.5,17.67L4.45,16.5C4.38,16.45 4.34,16.37 4.34,16.29V7.71C4.34,7.62 4.38,7.54 4.45,7.5L11.89,3.21C11.95,3.17 12.05,3.17 12.11,3.21L19.55,7.5C19.62,7.54 19.66,7.62 19.66,7.71V16.29C19.66,16.37 19.62,16.45 19.55,16.5L12.11,20.79C12.05,20.83 11.95,20.83 11.88,20.79L10,19.65C9.92,19.62 9.84,19.61 9.79,19.64C9.26,19.94 9.16,20 8.67,20.15C8.55,20.19 8.36,20.26 8.74,20.47L11.22,21.94C11.46,22.08 11.72,22.15 12,22.15C12.28,22.15 12.54,22.08 12.78,21.94L20.22,17.65C20.7,17.37 21,16.85 21,16.29V7.71C21,7.15 20.7,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.28,1.85 12,1.85M14,8C11.88,8 10.61,8.89 10.61,10.39C10.61,12 11.87,12.47 13.91,12.67C16.34,12.91 16.53,13.27 16.53,13.75C16.53,14.58 15.86,14.93 14.3,14.93C12.32,14.93 11.9,14.44 11.75,13.46C11.73,13.36 11.64,13.28 11.53,13.28H10.57C10.45,13.28 10.36,13.37 10.36,13.5C10.36,14.74 11.04,16.24 14.3,16.24C16.65,16.24 18,15.31 18,13.69C18,12.08 16.92,11.66 14.63,11.35C12.32,11.05 12.09,10.89 12.09,10.35C12.09,9.9 12.29,9.3 14,9.3C15.5,9.3 16.09,9.63 16.32,10.66C16.34,10.76 16.43,10.83 16.53,10.83H17.5C17.55,10.83 17.61,10.81 17.65,10.76C17.69,10.72 17.72,10.66 17.7,10.6C17.56,8.82 16.38,8 14,8Z'
	// },
	// {
	// 	name: 'Server',
	// 	svgPath:
	// 		'M4,1H20A1,1 0 0,1 21,2V6A1,1 0 0,1 20,7H4A1,1 0 0,1 3,6V2A1,1 0 0,1 4,1M4,9H20A1,1 0 0,1 21,10V14A1,1 0 0,1 20,15H4A1,1 0 0,1 3,14V10A1,1 0 0,1 4,9M4,17H20A1,1 0 0,1 21,18V22A1,1 0 0,1 20,23H4A1,1 0 0,1 3,22V18A1,1 0 0,1 4,17M9,5H10V3H9V5M9,13H10V11H9V13M9,21H10V19H9V21M5,3V5H7V3H5M5,11V13H7V11H5M5,19V21H7V19H5Z'
	// },
	// {
	// 	name: 'NPM (Node Package Manager)',
	// 	svgPath:
	// 		'M4,10V14H6V11H7V14H8V10H4M9,10V15H11V14H13V10H9M12,11V13H11V11H12M14,10V14H16V11H17V14H18V11H19V14H20V10H14M3,9H21V15H12V16H8V15H3V9Z'
	// },
	// {
	// 	name: 'Json',
	// 	svgPath:
	// 		'M5,3H7V5H5V10A2,2 0 0,1 3,12A2,2 0 0,1 5,14V19H7V21H5C3.93,20.73 3,20.1 3,19V15A2,2 0 0,0 1,13H0V11H1A2,2 0 0,0 3,9V5A2,2 0 0,1 5,3M19,3A2,2 0 0,1 21,5V9A2,2 0 0,0 23,11H24V13H23A2,2 0 0,0 21,15V19A2,2 0 0,1 19,21H17V19H19V14A2,2 0 0,1 21,12A2,2 0 0,1 19,10V5H17V3H19M12,15A1,1 0 0,1 13,16A1,1 0 0,1 12,17A1,1 0 0,1 11,16A1,1 0 0,1 12,15M8,15A1,1 0 0,1 9,16A1,1 0 0,1 8,17A1,1 0 0,1 7,16A1,1 0 0,1 8,15M16,15A1,1 0 0,1 17,16A1,1 0 0,1 16,17A1,1 0 0,1 15,16A1,1 0 0,1 16,15Z'
	// },
	// {
	// 	name: 'Database',
	// 	svgPath:
	// 		'M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z'
	// },
	// {
	// 	name: 'python',
	// 	svgPath: undefined
	// 	// 	'M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z'
	// 	// <img src="https://img.icons8.com/nolan/64/python.png"/>
	// }
];

export default skillList;