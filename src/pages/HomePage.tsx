import ActivitiesHome from "../components/containers/ActivitiesHome"
import BenefitsHome from "../components/containers/BenefitHome"
import HeaderHome from "../components/containers/HeaderHome"
import PanelHome from "../components/containers/PanelControlHome"

const HomePage = () => {
    return (
        <>
            <HeaderHome />
            <PanelHome />
            <BenefitsHome />
            <ActivitiesHome />
        </>
    )
}

export default HomePage