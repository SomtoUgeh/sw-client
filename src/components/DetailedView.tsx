import * as React from 'react';
import { colors } from 'styles/colors';
import styled from 'styled-components';
import { useDetailsView } from 'contexts/DetailsContext';
import { composeResource } from 'utils/composeResourceDetails';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { SubHeading, SubInformation } from 'components/cards/style';

export const DetailedView: React.FC = () => {
  const { isOpen, toggle, onClose, selectedResource, type } = useDetailsView();

  if (selectedResource && type) {
    const composedResource = composeResource(selectedResource, type);

    return (
      <Modal size="md" isOpen={isOpen} toggle={toggle} onClosed={onClose}>
        <ModalBody>
          <ModalContentWrapper>
            <div className="block" />

            <div className="information">
              <div className="name">
                <h4>
                  {(selectedResource?.name as string) ??
                    (selectedResource?.title as string)}
                </h4>
              </div>

              {selectedResource?.opening_crawl ? (
                <div>
                  <p className="description">
                    {(selectedResource?.opening_crawl as string) ?? ''}
                  </p>
                </div>
              ) : null}

              <div className="other-info">
                <div>
                  <SubHeading>info 1</SubHeading>
                  <SubInformation>
                    {composedResource?.one as string}
                  </SubInformation>
                </div>

                <div>
                  <SubHeading>info 2</SubHeading>
                  <SubInformation>
                    {composedResource?.two as string}
                  </SubInformation>
                </div>

                <div>
                  <SubHeading>info 3</SubHeading>
                  <SubInformation>
                    {composedResource?.three as string}
                  </SubInformation>
                </div>

                <div>
                  <SubHeading>info 4</SubHeading>
                  <SubInformation>
                    {composedResource?.four as string}
                  </SubInformation>
                </div>
              </div>
            </div>
          </ModalContentWrapper>
        </ModalBody>

        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  } else return <div />;
};

const ModalContentWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;

  div.block {
    min-height: 170px;
    background-color: #c4c4c4;
  }

  div.information {
    margin-top: 1rem;

    div.name {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: -0.04em;
      text-transform: uppercase;
      color: ${colors.black};
      padding-bottom: 1.25rem;
    }

    div.other-info {
      display: grid;
      gap: 2rem;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      margin-top: 3rem;
    }
  }

  button {
    font-family: 'Roboto Mono', monospace !important;
    text-transform: uppercase;
  }

  p.description {
    font-size: 13px;
  }
`;
