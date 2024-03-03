import { useEffect, useState } from 'react';
import './App.css';
import { db, auth, storage } from './config/firebase';
import { getDocs, collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';

// Import Components
import Navbar from './components/Navbar';

function App() {
    const [articleList, setArticleList] = useState([]);
    const [newArticleTitle, setNewArticleTitle] = useState("");
    const [newArticleDesc, setNewArticleDesc] = useState("");
    const [newArticleDate, setNewArticleDate] = useState({});
    const [newArticleAuthor, setNewArticleAuthor] = useState("");
    const [newArticleActive, setNewArticleActive] = useState(false);
    const [fileUpload, setFileUpload] = useState(null);

    const articleCollectionRef = collection(db, "articles");

    const getArticleList = async () => {
        try {
            const data = await getDocs(articleCollectionRef);
            const filteredArticleList = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
            console.log(filteredArticleList);
            setArticleList(filteredArticleList);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() =>{
        getArticleList();
    }, [getArticleList]);

    const onSubmitArticle = async () => {
        try {
            await addDoc(articleCollectionRef, {
                active: true,
                author: newArticleAuthor,
                desc: newArticleDesc,
                linkID: 0,
                publishDate: newArticleDate,
                title: newArticleTitle,
                userID: auth?.currentUser?.uid
            });

            getArticleList();
        } catch (err) {
            console.error(err);
        }
    };

    const deleteArticle = async (id) => {
        const article = doc(db, "articles", id);
        await deleteDoc(article);
    }

    const uploadFile = async () => {
        if (!fileUpload) return;
        const filesFolderRef = ref(storage, `Pictures/${fileUpload.name}`);
        try {
            await uploadBytes(filesFolderRef, fileUpload);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="App">
            <Navbar />
            <div>
                <input placeholder="Article Title" onChange={(e) => setNewArticleTitle(e.target.value)} />
                <input placeholder="Article Description" type="text" onChange={(e) => setNewArticleDesc(e.target.value)} />
                <input placeholder="Article Author" type="text" onChange={(e) => setNewArticleAuthor(e.target.value)} />
                <input placeholder="Publish Date" type="date" onChange={(e) => {
                    setNewArticleDate(new Date(e.target.value));
                }} />
                <input type="checkbox" checked={newArticleActive} onChange={(e) => setNewArticleActive(e.target.checked)} />
                <label>isActive?</label>
                <button type="submit" onClick={onSubmitArticle} >Submit Article</button>
            </div>
            <div>
                {articleList.map((article) => (
                    <div style={{display: article.active ? "flex" : "none"}}>
                        <h1>{article.title}</h1>
                        <p>{JSON.stringify(article.publishDate)}</p>
                        <p>{article.desc}</p>
                        <p>By {article.author}</p>
                        <button onClick={() => deleteArticle(article.id)}>Delete Article</button>
                    </div>
                ))}
            </div>
            <div>
                <input type="file" onChange={(e) => setFileUpload(e.target.files[0])} />
                <button type="submit" onClick={uploadFile}>Upload File</button>
            </div>
        </div>
    );
}

export default App;