import React, { useState } from "react";
import StepsController from "../StepsController/StepsController";
import FirstStep from "./FirstStep";
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import { checkIsValidFormSteps, updateErrorsFormSteps } from "../../services/manageValidation";
import styles from "./Form.module.scss";

const SpotForm = () => {
    const [validationError, setValidationError] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        website: '',
        address: '',
        email: '',
        description: '',
        foundationDate: ''
    });

    const handleFieldChange = (name, value, isRequired) => {
        setFormData({ ...formData, [name]: value })
        isRequired && setValidationError(
            validationError.filter((errorItem) => errorItem !== name)
        )
    }

    const manageNextStep = (step) => {
        const isValid = checkIsValidFormSteps({ formData, step });
        if (!isValid) {
            updateErrorsFormSteps({
                formData,
                step,
                setValidationError
            });
            return false
        }

        if (step === 3 && isValid) {
            handleSubmit()
        }
        return true
    }

    const handleSubmit = () => {
        alert("The form is valid. You can now submit the data: to the server.")
    };

    const steps = [
        <FirstStep formData={formData} validationError={validationError} handleFieldChange={handleFieldChange} />,
        <SecondStep formData={formData} validationError={validationError} handleFieldChange={handleFieldChange} />,
        <ThirdStep formData={formData} validationError={validationError} handleFieldChange={handleFieldChange} />
    ]

    return (
        <div className={styles.container}>
            <StepsController
                formTitle="Add a new company"
                manageNextStep={manageNextStep}
                steps={steps}
                stepsAmount={3}
            />
        </div>
    )

};

export default SpotForm;
