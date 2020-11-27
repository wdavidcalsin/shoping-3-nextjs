import st from "../styles/module/components/badge.module.scss";

function Badge({ content }: any) {
   return <span className={st.badge}>{content}</span>;
}

export default Badge;
