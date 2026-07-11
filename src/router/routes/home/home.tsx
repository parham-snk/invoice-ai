import { useState, useCallback, useContext } from "react";
import {
    ReactFlow,
    Background,
    Controls,
    applyEdgeChanges, applyNodeChanges
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { data, useNavigate } from "react-router-dom";
import { Edge, MiniMap, Node } from "reactflow";
import { useAuth } from "./AuthContext";

const INIT_nodes = [
    {
        id: "nodejs",
        position: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
        data: { label: "nodejs" },
        type: "input"
    }, {
        id: "react",
        position: { x: (window.innerWidth / 2) - 300, y: (window.innerHeight / 2) },
        data: { label: "react" },
        type: "output"
    }

];

const INIT_edges: Edge[] = [
    {
        id: "nodejs-react", source: "nodejs", target: "react", animated: true, type: 'smoothstep',
        label: 'connects with',
    }
];

export default function Home() {

    const { user, session } = useAuth()
    console.log(user,session)
    const navigate = useNavigate()

    const [nodes, setNodes] = useState(INIT_nodes);
    const [edges, setEdges] = useState(INIT_edges);


    const onNodesChange = useCallback(
        (changes: any) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes: any) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        [],
    );


    if (!user || !session)  navigate("/dashboard");
    return (
        <div style={{ width: "100vw", height: "100vh" }} className="bg-zinc-800">
            <ReactFlow
                nodes={nodes}

                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
            >

                <Background color="white" bgColor="zinc" />
                <Controls />
            </ReactFlow>
        </div>
    );
}