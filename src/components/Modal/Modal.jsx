import PropTypes from 'prop-types';
import CTA from '../CTA/CTA';
import styles from './Modal.module.scss';

const Modal = ({
  variant,
  title,
  children,
  onCloseModal,
  onSuccess,
  showButton = true,
  showClose = true,
  successButtonText = 'Success',
  closeButtonText = 'Close',
}) => (
  <div className={`${styles.modal} ${styles[variant]} ${styles['fade-in']}`} tabIndex="-1" role="dialog">
    <div className={styles['modal-dialog']} role="document">
      <div className={styles['modal-content']}>
        <div className={styles['modal-header']}>
          <div className={styles['modal-title']}>{title}</div>
          {showClose && (
            <button className={styles.close} type="button" onClick={onCloseModal}>
              <span aria-hidden="true">×</span>
            </button>
          )}
        </div>
        <div className={styles['modal-body']}>{children}</div>
        {showButton && (
          <div className={styles['modal-footer']}>
            <CTA href="#" variant="success" ctaType="button" onClick={onSuccess}>
              {successButtonText}
            </CTA>
            <CTA variant="danger" ctaType="button" data-dismiss="modal" onClick={onCloseModal}>
              {closeButtonText}
            </CTA>
          </div>
        )}
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  title: '',
  variant: '',
};

export default Modal;
