import styled from 'styled-components';
export const AppContainer = styled.div`
	text-align: center;
`;

export const Header = styled.header`
	min-height: 100vh;

	& h1 {
		color: white;
	}
`;
export const Title = styled.h1`
	margin-top: 45vh;
	color: white;
`;

export const Button = styled.button`
	font-size: calc(10px + 2vmin);
	cursor: pointer;
	padding: 1rem 1rem;
	margin-bottom: 1rem;
	border: 1px solid #061f14;
	background-color: #132515;
	color: white;
	border-radius: 12px;
	&:hover {
		background-color: #075a51;
		border-color: #02231e;
		border-radius: 12px;
	}
	&:active {
		border-radius: 12px;
	}
`;
