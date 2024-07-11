import React from 'react'
import cx from "classnames";
import { Input } from 'reactstrap';
import styles from './Form.module.scss'

const ThirdStep = ({ validationError, formData, handleFieldChange }) => {

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Additional</h2>
            <div className={styles.formItem}>
                <label className={styles.fieldLabel} htmlFor="email"><span className={styles.asterisk}>*</span> email</label>
                <Input
                    id="email"
                    name="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(event) => {
                        handleFieldChange("email", event.target.value, true)
                    }}
                    className={cx(styles.input, {
                        [styles.inputError]: validationError.includes("email"),
                    })} />
            </div>
            <div className={cx(styles.formItem)}>
                <label className={styles.fieldLabel} htmlFor="foundationDate">Foundation date </label>
                <Input
                    id="foundationDate"
                    name="foundationDate"
                    placeholder="10/24/2015 (MM/DD/YYYY)"
                    value={formData.foundationDate}
                    onChange={(event) => {
                        handleFieldChange("foundationDate", event.target.value)
                    }}
                    className={styles.input}

                />
            </div>
        </div>
    )
}

export default ThirdStep