import { colors } from 'styles/colors';
import styled from 'styled-components';
import { Container } from 'reactstrap';

export const HeaderContainer = styled.main`
	width: 100%;

	header {
		width: 100%;
		background-color: ${colors.black};

		@media (min-width: 1024px) {
			text-align: center;
		}
	}

	nav {
		display: grid;

		@media (min-width: 1024px) {
			place-items: center;
			background-color: ${colors.black};
			border-bottom: 1px solid #333333;
		}
	}

	div.nav-wrapper {
		@media (max-width: 1023px) {
			background-color: ${colors.black};
			position: fixed;
			top: 100px;
			left: 0;
			width: 100%;
			height: 100vh;
			overflow: hidden;
			transform: translateX(-100%);
			transition: transform 0.5s cubic-bezier(0, 0, 0, 0.98);
			z-index: 1;
		}
	}

	&.isOpen {
		height: 102px;

		header {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 1;

			@media (min-width: 1024px) {
				position: relative;
			}
		}

		div.nav-wrapper {
			transform: translateX(0);
		}
	}
`;

export const LogoWrapper = styled.div`
	padding: 26px;
	width: 100%;
	text-align: left;

	display: flex;
	justify-content: space-between;
	align-items: center;

	svg {
		width: 100px;
	}

	@media (min-width: 1024px) {
		display: block;
		text-align: center;
		border-bottom: 1px solid #333333;
	}

	button {
		background: unset;
		border: none;

		@media (min-width: 1024px) {
			display: none;
		}

		svg {
			width: 24px;
			height: 24px;
		}
	}
`;

export const NavWrapper = styled.div`
	background-color: ${colors.black};
	position: fixed;
	top: 100px;
	left: 0;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	transform: translateX(-100%);
	transition: transform 0.5s cubic-bezier(0, 0, 0, 0.98);
	z-index: 1;

	&.isOpen {
		transform: translateX(0);
	}
`;

export const NavigationContainer = styled.ul`
	display: flex;
	list-style: none;
	margin: 0;

	flex-direction: column;
	background-color: #343434;

	@media (min-width: 1024px) {
		height: 52px;
		flex-direction: row;
		background-color: unset;
	}

	li {
		text-transform: uppercase;

		@media (min-width: 1024px) {
			border-left: 1px solid #333333;
			flex-direction: row;

			&:last-of-type {
				border-right: 1px solid #333333;
			}
		}

		a {
			padding: 1rem 2.5rem;
			font-size: 12px;
			line-height: 16px;
			text-decoration: none;
			color: ${colors.alt};
			display: flex;
			align-items: center;

			span {
				margin-right: 0.5rem;

				svg {
					width: 16px;
					height: 14px;
				}
			}

			&:hover,
			&.active {
				color: ${colors.white};
				border-left: 4px solid ${colors.white};
				background: #151515;

				@media (min-width: 1024px) {
					border-left: none;
					background: unset;
					border-bottom: 4px solid ${colors.white};
				}
			}
		}
	}
`;

export const ContentWrapper = styled.div`
	background-color: ${colors.bg};
`;

export const ExtendedContainer = styled(Container)`
	padding: 4rem 0;
`;
