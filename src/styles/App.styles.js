import styled from 'styled-components';
export const AppContainer = styled.div`
	text-align: center;
`;

export const Header = styled.header`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	& h1 {
		color: white;
	}
`;
export const Title = styled.h3`
	color: white;
`;

export const Button = styled.button`
	font: inherit;
	cursor: pointer;
	padding: 1rem 2rem;
	border: 1px solid #061f14;
	background-color: #132515;
	color: white;
	border-radius: 12px;
	margin-right: 1rem;
	&:hover {
		background-color: #075a51;
		border-color: #02231e;
	}
`;
