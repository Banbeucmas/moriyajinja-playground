'use client';
import { useControls } from 'leva';

function App() {
    const { color } = useControls({
        color: {
            label: 'Color',
            value: '#ff0000',
        },
    });

    return (
        <main>
            <div style={{ color: color }}>
                <span>Sample text, do your edit here</span>
            </div>
        </main>
    );
}

export default App;
