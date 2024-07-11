import React from 'react'
import cx from "classnames";
import { Input } from 'reactstrap';
import styles from './Form.module.scss'

const FirstStep = ({ validationError, formData, handleFieldChange }) => {

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>General</h2>
            <div className={styles.formItem}>
                <label className={styles.fieldLabel} htmlFor="name"><span className={styles.asterisk}>*</span> company name</label>
                <Input
                    id="name"
                    name="name"
                    placeholder="Company name"
                    value={formData.name}
                    onChange={(event) => {
                        handleFieldChange("name", event.target.value, true)
                    }}
                    className={cx(styles.input, {
                        [styles.inputError]: validationError.includes("name"),
                    })}
                />
            </div>
            <div className={styles.textareaContainer}>
                <label className={styles.fieldLabel} htmlFor="text">description</label>
                <Input
                    id="text"
                    name="text"
                    className={cx(styles.textarea, {
                        [styles.inputError]: validationError.includes("description"),
                    })}
                    type="textarea"
                    placeholder="Description"
                    onChange={(event) => {
                        handleFieldChange("description", event.target.value)
                    }}
                    value={formData.description}
                />
            </div>
        </div >
    )
}

export default FirstStep