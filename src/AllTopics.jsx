import { Link } from "react-router-dom";
import './AllTopics.css';

const topics = [
    {
        category: "React Basics",
        items: [
            { name: "Import & Export", path: "/O1_Import_Export", component: "O1_Import_Export.jsx" },
            { name: "Object Data", path: "/O2_ObjectData", component: "O2_ObjectData.jsx" },
            { name: "Array Data", path: "/O3_ArrayData", component: "O3_ArrayData.jsx" },
            { name: "CSS Modules", path: "/O4_CssModule", component: "O4_CssModule.jsx" },
        ]
    },
    {
        category: "State & Interactivity",
        items: [
            { name: "State Management", path: "/O5_State", component: "O5_State.jsx" },
            { name: "Toggle/Hide Elements", path: "/O6_Toggle_or_Hide", component: "O6_Toggle_or_Hide.jsx" },
            { name: "Multiple Conditions", path: "/O7_Multiple_Condition", component: "O7_Multiple_Condition.jsx" },
            { name: "Props", path: "/O8_Props", component: "O8_Props.jsx" },
            { name: "Input Fields", path: "/O9_Input_field", component: "O9_Input_field.jsx" },
        ]
    },
    {
        category: "Forms & Controlled Components",
        items: [
            { name: "Controlled Components", path: "/O10_Controlled_Component", component: "O10_Controlled_Component.jsx" },
            { name: "Checkbox Handling", path: "/O11_Handle_CheckBox", component: "O11_Handle_CheckBox.jsx" },
            { name: "Radio Buttons", path: "/O12_Radio_Button", component: "O12_Radio_Button.jsx" },
            { name: "Validation", path: "/O54_Validation", component: "O54_Validation.jsx" },
            { name: "Validation with UseActionState", path: "/O55_Validation_UseActionState", component: "O55_Validation_UseActionState.jsx" },
        ]
    },
    {
        category: "Data Rendering & Mapping",
        items: [
            { name: "Loops & Map", path: "/O13_Loop_and_Map", component: "O13_Loop_and_Map.jsx" },
            { name: "Reusable Components", path: "/O14_Reuse_component", component: "O14_Reuse_component.jsx" },
            { name: "Array Nested Loop", path: "/O15_Array_Nested_loop", component: "O15_Array_Nested_loop.jsx" },
        ]
    },
    {
        category: "React Hooks",
        items: [
            { name: "useEffect Hook", path: "/O16_Hooks_O1_useEffect", component: "O16_Hooks_O1_useEffect.jsx" },
            { name: "useRef Hook", path: "/O23_useRef", component: "O23_useRef.jsx" },
            { name: "useFormStatus Hook", path: "/O27_useFormStatus_hook", component: "O27_useFormStatus_hook.jsx" },
            { name: "useTransition Hook", path: "/O28_UseTransition_hook", component: "O28_UseTransition_hook.jsx" },
            { name: "useActionState Hook", path: "/O34_UseActionState_Hook", component: "O34_UseActionState_Hook.jsx" },
            { name: "useID Hook", path: "/O35_UseID_hook", component: "O35_UseID_hook.jsx" },
            { name: "useReducer Hook", path: "/O56_UseReducer", component: "O56_UseReducer.jsx" },
            { name: "useOptimistic Hook", path: "/O59_UseOptimistic_Hook", component: "O59_UseOptimistic_Hook.jsx" },
        ]
    },
    {
        category: "Styling in React",
        items: [
            { name: "CSS Styling", path: "/O19_Style_css", component: "O19_Style_css.jsx" },
            { name: "CSS Modules", path: "/O20_Css_Modules", component: "O20_Css_Modules.jsx" },
            { name: "Styled Components", path: "/O21_Styled_Component", component: "O21_Styled_Component.jsx" },
            { name: "Bootstrap", path: "/O22_Bootstrap", component: "O22_Bootstrap.jsx" },
        ]
    },
    {
        category: "Advanced Patterns",
        items: [
            { name: "Uncontrolled Components", path: "/O24_Uncontrolled_component", component: "O24_Uncontrolled_component.jsx" },
            { name: "Pass Functions as Props", path: "/O25_Pass_Function", component: "O25_Pass_Function.jsx" },
            { name: "Forward Ref", path: "/O26_ForwardRef", component: "O26_ForwardRef.jsx" },
            { name: "Pure Components", path: "/O29_Pure_Component_function", component: "O29_Pure_Component_function.jsx" },
            { name: "Derived State", path: "/O30_Derived_state", component: "O30_Derived_state.jsx" },
            { name: "Lifting State Up", path: "/O31_Lifting_State_up", component: "O31_Lifting_State_up.jsx" },
            { name: "Updating Object State", path: "/O32_Updating_Object_state", component: "O32_Updating_Object_state.jsx" },
            { name: "Updating Array State", path: "/O33_Update_Array_state", component: "O33_Update_Array_state.jsx" },
        ]
    },
    {
        category: "Context API & Custom Hooks",
        items: [
            { name: "Context API", path: "/O37_Context_API", component: "O37_Context_API.jsx" },
            { name: "Custom Hooks", path: "/O38_Custom_Hooks", component: "O38_Custom_Hooks.jsx" },
            { name: "useAPI Custom Hook", path: "/O58_UseAPI", component: "O58_UseAPI.jsx" },
        ]
    },
    {
        category: "React Router",
        items: [
            { name: "React Router Basics", path: "/O39_React_Router", component: "O39_React_Router.jsx" },
            { name: "Navigation Bar", path: "/O40_NavBar", component: "O40_NavBar.jsx" },
            { name: "404 Page Not Found", path: "/O41_404_pageNotFound", component: "O41_404_pageNotFound.jsx" },
            { name: "Nested Routing", path: "/O42_Nested_Routing", component: "O42_Nested_Routing.jsx" },
            { name: "Layout & Index Routes", path: "/O43_Layout_and_Index_Routes", component: "O43_Layout_and_Index_Routes.jsx" },
            { name: "Prefix Routes", path: "/O44_Prefix_Rout", component: "O44_Prefix_Rout.jsx" },
            { name: "Dynamic Routes", path: "/O45_Dynamic_Route", component: "O45_Dynamic_Route.jsx" },
            { name: "Optional Segments", path: "/O46_Optional_Segment", component: "O46_Optional_Segment.jsx" },
            { name: "NavLink", path: "/O48_NavLink", component: "O48_NavLink.jsx" },
        ]
    },
    {
        category: "API Integration",
        items: [
            { name: "API GET Method", path: "/O49_API_GET_method", component: "O49_API_GET_method.jsx" },
            { name: "API Loader", path: "/O50_API_Loader", component: "O50_API_Loader.jsx" },
            { name: "Routes Pages API", path: "/O51_Routes_Pages_API", component: "O51_Routes_Pages_API.jsx" },
            { name: "Delete API", path: "/O52_Delete_API", component: "O52_Delete_API.jsx" },
            { name: "PUT API", path: "/O53_PUT_API", component: "O53_PUT_API.jsx" },
        ]
    },
    {
        category: "Performance & Optimization",
        items: [
            { name: "Lazy Loading", path: "/O57_Lazy_Loading", component: "O57_Lazy_Loading.jsx" },
        ]
    },
    {
        category: "Additional Features",
        items: [
            { name: "Email Sending", path: "/O47_Email_sending", component: "O47_Email_sending.jsx" },
            { name: "Image Passing", path: "/O61_Image_Passing", component: "O61_Image_Passing.jsx" },
        ]
    }
];

export default function AllTopics(){
    return (
        <div className="topics-container">
            <header className="topics-header">
                <h1>React Learning Hub</h1>
                <p>Master React concepts step by step - Click on any topic to explore</p>
            </header>
            
            <div className="topics-grid">
                {topics.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="category-card">
                        <h2 className="category-title">{category.category}</h2>
                        <ul className="topics-list">
                            {category.items.map((topic, topicIndex) => (
                                <li key={topicIndex} className="topic-item">
                                    <Link to={topic.path} className="topic-link">
                                        <span className="topic-name">{topic.name}</span>
                                        <span className="topic-file">{topic.component}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            
            <footer className="topics-footer">
                <p>Total Topics: {topics.reduce((acc, cat) => acc + cat.items.length, 0)} | 
                   Categories: {topics.length}</p>
            </footer>
        </div>
    )
}