import React, { useState } from "react";
import Button from "../../components/Button/Button"
import StepsIndicator from "./StepsIndicator";
import styles from "./StepsController.module.scss";

const StepsController = ({ steps, manageNextStepValidation, stepsAmount, formTitle }) => {
    const [step, setStep] = useState(1);

    const onNextStep = () => {
        if (manageNextStepValidation(step) && step !== stepsAmount) {
            setStep(step + 1)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.indicatorContainer}>
                <h1 className={styles.title}>{formTitle}</h1>
                <StepsIndicator step={step} stepsAmount={stepsAmount} />
            </div>
            <div className={styles.formContainer}>
                <div> {
                    steps[step - 1]
                }</div>
                <div className={styles.buttonsContainer}>
                    <Button className={styles.nextButton} onClick={() => onNextStep()}>{step !== stepsAmount ? "Next" : "Send"}</Button>
                    {step !== 1 && <Button className={styles.backButton} onClick={() => setStep(step - 1)}>Back</Button>}
                </div>
            </div>
        </div>
    )
};

export default StepsController;

