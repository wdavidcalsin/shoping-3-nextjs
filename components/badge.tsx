import st from "../styles/components/badge.module.scss";

function Badge({ content }: any) {
   return <span className={st.badge}>{content}</span>;
}

export default Badge;
