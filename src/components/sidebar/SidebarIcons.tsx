import Navs from "../../lib/sidebar/Navs";
import Case from "../icons/case";
import Home from "../icons/home";
import Legal from "../icons/search";
import Library from "../icons/library";
import Settings from "../icons/settings";

export default function Icons(props: any) {
    switch (props.path) {
        case Navs[0].path:
            return <Home className="w-6" />;

        case Navs[1].path:
            return <Library className="w-6" />;

        case Navs[2].path:
            return <Case className="w-6" />;

        case Navs[3].path:
            return <Legal className="w-6" />;

        case Navs[4].path:
            return <Settings className="w-6" />;

        default:
            return <></>;
    }
}