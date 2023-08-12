import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function Modal({ children, isOpen, className, onRequestClose }) {
    return (
        <ReactModal
            onRequestClose={onRequestClose}
            isOpen={isOpen}
            overlayClassName={cx('overlay')}
            className={cx('wrapper', className)}
        >
            {children}
        </ReactModal>
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    classNames: PropTypes.string,
};

export default Modal;
