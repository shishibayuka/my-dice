import styles from "./Components.module.css";

export const FormInputFieldItem = ({ labelName,id,type,onChange }) => {
    return (
        <>
            <div className={styles.login_form}>
                <label htmlFor={id}>{ labelName }</label>
                <input id={id} type={type} name={id} onChange={(e)=>onChange(e.target.value)} />
            </div>        
        </>
    );
};