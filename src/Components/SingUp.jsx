

function signup() {
    return (
      <div>
          <div className="div contained">
              <form>
                <label htmlFor="">
                    <p>Name</p>
                    <input type="text" />
                    </label>
                  <label htmlFor="">
                  <p>email</p>
                  <input type="email" />
                  </label>
                  <label htmlFor="">
                      <p>password</p>
                      <input type="password" />
                      </label>
                      <button>signup</button>
              </form>
          </div>
      </div>
    )
  }
  
  export default signup