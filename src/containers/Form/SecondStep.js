import React from 'react'
import cx from "classnames";
import { Input } from 'reactstrap';
import styles from './Form.module.scss'

const SecondStep = ({ validationError, formData, handleFieldChange }) => {

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Details</h2>
            <div className={styles.formItem}>
                <label className={styles.fieldLabel} htmlFor="website"><span className={styles.asterisk}>*</span> website</label>
                <Input
                    id="website"
                    name="website"
                    placeholder="https://company.com"
                    value={formData.website}
                    onChange={(event) => {
                        handleFieldChange("website", event.target.value, true)
                    }}
                    className={cx(styles.input, {
                        [styles.inputError]: validationError.includes("website"),
                    })}
                />
            </div>
            <div className={cx(styles.formItem)}>
                <label className={styles.fieldLabel} htmlFor="address"><span className={styles.asterisk}>*</span> address</label >
                <Input
                    id="address"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={(event) => {
                        handleFieldChange("address", event.target.value, true)
                    }}
                    className={cx(styles.input, {
                        [styles.inputError]: validationError.includes("address"),
                    })}

                />
            </div>
        </div>
    )
}

export default SecondStep