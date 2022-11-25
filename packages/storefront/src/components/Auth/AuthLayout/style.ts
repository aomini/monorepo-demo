import styled from 'styled-components';
import { rem, transparentize } from 'polished';

export const AuthLayoutDiv = styled.div`
  &.auth-layout {
    height: 100%;
    max-width: 345px;
    margin: 0 auto;

    .shape {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
      //z-index: -1;

      .image {
        width: 320px;
        height: 100%;
        position: absolute;
        top: -50%;
        right: 0;
        transform: translateX(60px);

        span {
          position: static !important;
        }
      }

      &.shape-circle {
        .image {
          width: 400px;
          height: 400px;
          position: absolute;
          top: auto;
          bottom: 0;
          right: auto;
          left: 7%;
          transform: none;
        }
      }
    }

    .form-wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;

      .logo-wrapper {
        margin-top: auto;
        margin-bottom: ${rem(50)};

        .image {
          min-height: 50px;
        }
      }

      .form-container {
        .title {
          margin-bottom: ${rem(30)};
          text-align: center;

          h6 {
            color: ${(props) => props.theme.color.text};
          }
        }

        .input-field {
          margin-bottom: ${rem(25)};
        }

        .otp-input {
          margin-bottom: ${rem(50)};

          > div {
            justify-content: center;
          }

          .otp-code {
            margin-right: ${rem(20)};

            &:last-child {
              margin-right: 0;
            }

            input {
              border-radius: 8px;
              width: 57px !important;
              height: 57px;
              font-weight: bolder;
              border: 1px solid ${(props) => props.theme.borderColor};
              background-color: transparent;
              padding: ${rem(7)} ${rem(8)};
              outline: none;
              font-size: ${rem(35)};
              color: ${(props) => props.theme.color.text};

              &::placeholder {
                color: ${(props) =>
                  transparentize('0.44', `${props.theme.color.text}`)};
              }
            }
          }
        }

        .button-wrapper {
          margin-top: ${rem(5)};
          button {
            margin: 0 auto;

            + button {
              margin-top: ${rem(80)};
            }
          }
        }
      }

      .link-button-wrapper {
        margin-top: auto;

        button {
          margin: 0 auto;
        }
      }
    }
  }
`;
