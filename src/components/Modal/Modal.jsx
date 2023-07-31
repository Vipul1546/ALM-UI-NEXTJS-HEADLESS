import PropTypes from 'prop-types';
import CTA from '../CTA/CTA';
import CtaStyles from '../CTA/CTA.module.scss';
import styles from './Modal.module.scss';

const Modal = ({
  title, children, onCloseModal, onSuccess, 
}) => (
  <div className={styles.modal} tabIndex="-1" role="dialog">
    <div className={styles['modal-dialog']} role="document">
      <div className={styles['modal-content']}>
        <div className={styles['modal-header']}>
          <div className={styles['modal-title']}>{title}</div>
          <CTA
            ctaType="button"
            variant={`${CtaStyles.close} ${styles.close}`}
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={onCloseModal}
          >
            <span aria-hidden="true">&times;</span>
          </CTA>
        </div>
        <div className={styles['modal-body']}>{children}</div>
        <div className={styles['modal-footer']}>
          <CTA href="#" variant={`${CtaStyles.button} ${CtaStyles.success}`} ctaType="button" onClick={onSuccess}>
            success
          </CTA>
          <CTA
            variant={`${CtaStyles.button} ${CtaStyles.danger}`}
            ctaType="button"
            data-dismiss="modal"
            onClick={onCloseModal}
          >
            Close
          </CTA>
        </div>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  title: '',
};

export default Modal;
