import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from './mock';
import { addData } from '../redux/slice/blogReducer';
import { useNavigate, Link } from 'react-router-dom';
function Blogpage() {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.blog.posts || []);
    const [form, setForm] = useState({
        title: '',
        body: '',
        tags: ['A', 'B', 'C'],
        userId: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const mockdata = await addPost(form);
        dispatch(addData(mockdata));
        console.log(posts);
        setForm({
            title: '',
            body: '',
            tags: '',
            userId: ''
        });
    }
    return (
        <>
            <div
                style={{
                    maxWidth: '600px',
                    margin: '40px auto',
                    padding: '20px',
                    border: '1px solid #ddd',
                    borderRadius: '12px',
                    backgroundColor: '#f9f9f9',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ textAlign: 'right', marginBottom: '10px' }}>
                    <button
                        style={{
                            padding: '8px 12px',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                        }}
                    >
                        <Link
                            to="/"
                            style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold' }}
                        >
                            Go Home
                        </Link>
                    </button>
                </div>

                <form
                    onSubmit={handleSubmit}
                    style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
                >
                    <div>
                        <label htmlFor="title" style={{ fontWeight: 'bold' }}>
                            Title:
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={form.title}
                            onChange={handleInputChange}
                            style={{
                                width: '100%',
                                padding: '10px',
                                marginTop: '6px',
                                borderRadius: '6px',
                                border: '1px solid #ccc',
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor="body" style={{ fontWeight: 'bold' }}>
                            Body:
                        </label>
                        <textarea
                            id="body"
                            name="body"
                            value={form.body}
                            onChange={handleInputChange}
                            rows="4"
                            style={{
                                width: '100%',
                                padding: '10px',
                                marginTop: '6px',
                                borderRadius: '6px',
                                border: '1px solid #ccc',
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor="userId" style={{ fontWeight: 'bold' }}>
                            User ID:
                        </label>
                        <input
                            type="text"
                            id="userId"
                            name="userId"
                            value={form.userId}
                            onChange={handleInputChange}
                            style={{
                                width: '100%',
                                padding: '10px',
                                marginTop: '6px',
                                borderRadius: '6px',
                                border: '1px solid #ccc',
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            padding: '12px',
                            backgroundColor: '#28a745',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            marginTop: '10px',
                        }}
                    >
                        Add Post
                    </button>
                </form>
            </div>

        </>
    )
}

export default Blogpage;
