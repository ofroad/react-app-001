import React, {useState} from "react";

// 两个 props:
//   text - 显示的内容
//   maxLength - 在点击“read more”之前显示多少个字符
function LessText({ text, maxLength }) {
  // 创建一个状态，并将其初始化为“true”
  const [hidden, setHidden] = useState(true);
  if (text <= maxLength) {
    return <span>{text}</span>;
  }

  return (
    <span>
      {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
      {hidden ? (
        <span onClick={() => setHidden(false)}> read more</span>
      ) : (
        <span onClick={() => setHidden(true)}> read less</span>
      )}
    </span>
  );
}

function StepTracker() {
  const [steps, setSteps] = useState(0);

  function increment() {
    //setSteps(steps => steps + 1);
    setSteps(steps + 1);
  }

  return (
    <div>
      总共走了 {steps} 步!
      <br />
      <button onClick={increment}>
        点点我，步数不是个事！
      </button>
    </div>
  );
}

function RandomList() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.random() * 100
      }
    ]);
  };

  return (
    <>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </>
  );
}

function LoginForm() {
  const [form, setValues] = useState({
    username: '',
    password: ''
  });

  const printValues = e => {
    e.preventDefault();
    console.log(form.username, form.password);
  };

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={printValues}>
      <label>
        Username:
        <input
          value={form.username}
          name="username"
          onChange={updateField}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          value={form.password}
          name="password"
          type="password"
          onChange={updateField}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}


export default function() {
  return (
    <>
      <LessText text={`专注、努力是成功的真正关键。把你的眼睛盯在目标上，然后朝着目标迈出下一步法师打发发斯蒂芬`} maxLength={30} />
      <br />
      <StepTracker />
      <br /><br /><br />
      <RandomList />
      <br /><br /><br />
      <LoginForm />
    </>
  )
}



