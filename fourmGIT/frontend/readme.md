dependencies 
"axios": "^1.7.7",
"react": "^18.3.1",
"react-dom": "^18.3.1",
"react-icons": "^5.4.0",
"react-markdown": "^9.0.1",
"react-router-dom": "^6.28.0",
"rehype-highlight": "^7.0.1",
"remark-gfm": "^4.0.0"

command:
npm install axios@^1.7.7 react@^18.3.1 react-dom@^18.3.1 react-icons@^5.4.0 react-markdown@^9.0.1 react-router-dom@^6.28.0 rehype-highlight@^7.0.1 remark-gfm@^4.0.0


routes : 

        <Route path="/forum/category/algorithms" element={<ForumAlgorithms/>}/>
        <Route path="/forum/category/interview_experience" element={<ForumIntervie>}/>
        <Route path="/forum/category/tips_and_tricks" element={<ForumTips/>}/>
        <Route path="/forum/category/general_discussions" element={<ForumGD/>}/>
        <Route path="/post/algorithms" element={<PostPage/>} />
        <Route path="/post/general_discussions" element={<PostPage/>} />
        <Route path="/post/tips_and_tricks" element={<PostPage/>} />
        <Route path="/post/interview_experience" element={<PostPage/>} />
        <Route path="discussion/:id" element={<DetailedPost/>} />
