import styled from 'styled-components';

const Item = styled.div`
	display: flex;
	padding: 0.5rem;
	margin: 0.5rem 0;
	${props => `background-color: ${props.theme};`}
	justify-content: space-between;
	border-radius: 10px;

	& span {
		-webkit-text-stroke: 1px black;
		font-size: 1.5rem;
		font-weight: bold;
		min-width: 50px;
		padding-right: 12px;
		color: white;
	}
`;
export default Item;
