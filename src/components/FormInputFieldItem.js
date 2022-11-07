import styles from "./Components.module.css";

export const FormInputFieldItem = ({ labelName,id,type }) => {
    return (
        <>
            <div className={styles.login_form}>
                <label htmlFor={id}>{ labelName }</label>
                <input id={id} type={type} name={id} />
            </div>        
        </>
    );
};