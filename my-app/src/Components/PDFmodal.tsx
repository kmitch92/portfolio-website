import { Modal, Button } from 'react-bootstrap';
import { FC } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';

import mdCV from '../Assets/CV';

interface Props {
  PDFmodalShow: boolean;
  handleClose: () => void;
}

export const PDFmodal: FC<Props> = ({ PDFmodalShow, handleClose }) => {
  return (
    <Modal
      style={{ height: '60vh', marginTop: '10vh' }}
      show={PDFmodalShow}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Curriculum Vitae</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MarkdownPreview
          source={mdCV}
          style={{ width: '100%', border: 'none' }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="darker-tg" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
