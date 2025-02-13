export default function Nav(){
    return (
        <nav className="w-full h-20   text-center relative">
            <button className="absolute top-6 right-285 bg-blue-400 text-white w-39 h-10 rounded-lg">���ΐ�?? �� ������</button>
            <p className="absolute top-6 right-165 text-gray-500">���� �� ��</p>
            <p className="absolute top-6 right-145 text-gray-500">������ ��</p>
            <p className="absolute top-6 right-125 text-gray-500">������</p>
            <p className="absolute top-6 right-105 text-gray-500">��ѐ�� ��</p>
            <p className="absolute top-6 right-85 text-gray-500">�������</p>
            <p className="absolute top-6 right-65 text-gray-500">�����</p>
            <div className="absolute top-2 right-5 text-blue-500">
                <a href="#" className=" text-blue-800">�ј� ������ </a>
                <br />
                <a href="#" >����� ������ � ��������?</a>
            </div>
        </nav>
    )
}
