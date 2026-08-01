export default function Toolbar() {
    return (
        <div className="bg-white border-b px-6 py-3 flex gap-3">
            <button className="px-3 py-2 border rounded">B</button>
            <button className="px-3 py-2 border rounded italic">I</button>
            <button className="px-3 py-2 border rounded underline">U</button>

            <select className="border rounded px-2">
                <option>Arial</option>
                <option>Times New Roman</option>
                <option>Calibri</option>
            </select>

            <select className="border rounded px-2">
                <option>12</option>
                <option>14</option>
                <option>16</option>
                <option>18</option>
            </select>
        </div>
    );
}