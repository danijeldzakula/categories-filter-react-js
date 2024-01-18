import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const products = [
    { _id: 'fsdhfhsdhfsdhfsdhfhsd', title: 'Dell Inspirion 5402 - NOT19604', description: 'It is a long established fact that a reader will be distracted by the readable content of a page' },
    { _id: 'fsdfjdsfjhdfjdfjdjfdj', title: 'Acer Nitro 5 AN515-57-98GP', description: 'It is a long established fact that a reader will be distracted by the readable content of a page' },
    { _id: 'fhjsdfdjfksdkjfdhjfhd', title: 'HP 15s-eq3008nm - 65A92EA', description: 'It is a long established fact that a reader will be distracted by the readable content of a page' },
    { _id: 'dfhdfgdhfgdhfdhhdhlqo', title: 'Tesla TeslaBook 9', description: 'It is a long established fact that a reader will be distracted by the readable content of a page' },
    { _id: 'aaadfjdjhdfdjfdjfdjjk', title: 'Lenovo IdeaPad 3 15ITL6 - 82H802P5YA', description: 'It is a long established fact that a reader will be distracted by the readable content of a page' },
    { _id: 'sdfjksdjkfhjsdfdjkfdh', title: 'HP 250 G9 -6F1Z9EA', description: 'It is a long established fact that a reader will be distracted by the readable content of a page' },
    { _id: 'sdfhkjsdjfsdhfjhdjfdw', title: 'Lenovo Legion 5 Pro - 82RG00C2YA', description: 'It is a long established fact that a reader will be distracted by the readable content of a page' },
    { _id: 'sdjkfdsdjkfhdfjdjfdjk', title: 'Apple MacBook Pro 14 m1 Pro - 2021 Space Gray', description: 'It is a long established fact that a reader will be distracted by the readable content of a page' },
    { _id: 'ksdjfhksdjhfjksdfhdjf', title: 'Gigabyte AERO 5 XE4 Creator - NOT20028', description: 'It is a long established fact that a reader will be distracted by the readable content of a page' }
  ]
  
  const brands = [
    { _id: 'ksdjfhksdjhfjksdfhdjf', label: 'Dell', type: "brand", value: '=!attr_brand' },
    { _id: 'fdsfsdfdkfdfjkdkfdkkk', label: 'Acer', type: "brand", value: '=!attr_brand' },
    { _id: 'asdjfsdfhjdkfhdjfdjjj', label: 'HP', type: "brand", value: '=!attr_brand' },
    { _id: 'sdfsdjkfdjkfjkdfkkdkk', label: 'Tesla', type: "brand", value: '=!attr_brand' },
    { _id: 'sdhkfdwewoeoweiwoeazp', label: 'Lenovo', type: "brand", value: '=!attr_brand' },
    { _id: 'oidfsdifsfsodosdosdfo', label: 'Apple', type: "brand", value: '=!attr_brand' },
    { _id: 'papspadfduifdfiowooww', label: 'Gigabyte', type: "brand", value: '=!attr_brand' },
  ]

  const price = { min: '100', max: '999999'};

  const Categories = () => {
    const location = useLocation();

    const { search } = useLocation();

    const navigate = useNavigate();
    const [filters, setFilters] = useState([]); 


    console.log(search)

    useEffect(() => {
      const filtred = JSON.parse(window.sessionStorage.getItem('filters'));
  
      if (filtred) {
        setFilters(filtred);
      }
    }, []);
  
    useEffect(() => {
      if (location.pathname.includes('/categories/')) {
        window.sessionStorage.setItem('filters', JSON.stringify(filters));
      }

      return () => {
        window.sessionStorage.setItem('filters', JSON.stringify([]));
      }
    }, [filters, location]);
  
    const handleOnChange = (event) => (id) => (data) => {
      const { checked } = event.target;
  
      if (checked) {
        setFilters((prevState) => {
          const newData = data.filter((s) => s._id === id);
  
          return [...prevState, ...newData]
        });
      } else {
        setFilters((prevState) => {
          const oldData = prevState.filter((s) => s._id !== id);
          return oldData
        });      
      }
    }
  
    const queryParams = useMemo(() => {
      const query = filters && filters.map(item => {
        const url = item.type + item.value + item.label;
        return url;
      });
      
      return query;
    }, [filters]);

    const formatQueryParams = (query) => {
      let result = [];

      result = query.map((item, idx) => {
        if (idx === 0) {
          return item;
        }

        return item.replace('brand=', '');
      }).join('+');

      return result;
    }

    useEffect(() => {
        if (queryParams) {
          navigate('/categories/?' + formatQueryParams(queryParams));
        }
    }, [queryParams, navigate]);


    // const getCategories = useCallback(async () => {
    //   console.log('response', id)
    // }, [id]);
    
    // useEffect(() => {
    //   if (id) {
    //     getCategories();
    //   }
    // }, [id, getCategories]);

    // https://codepen.io/danishlaeeq/pen/OJvGmaY

    return (
        <section className="section">
            <div className="container">
            <Link to="/">
              <h2 className="title">Categories</h2>
            </Link>

            <hr className="hr" />

            <div className="row wrapper-product">
                <div className="col filters">
                  <form className="form form-filter">
                      <div className="">
                        <h4>Proizvodjac</h4>

                        <div className="filter-group">
                          {brands && brands.map((item) => {
                            return (
                                <div key={item._id} className="form-group">
                                  <input type='checkbox' id={item._id} className="input input-checkbox" value={item._id} onChange={(e) => handleOnChange(e)(item._id)(brands)} checked={(Object.values(filters).some(s => s._id === item._id))} />
                                  <label htmlFor={item._id} className="label">{item.label}</label>
                                </div>
                              )
                            })}
                        </div>
                      </div>
                      


                      <div className="">
                        <h4>Cena</h4>

                        <div className='filter-group'>

                          {/* <div class="slider">
                            <div class="progress"></div>
                          </div> */}
                          
                          {/* <div class="range-input">
                            <input type="range" class="range-min" min="0" max="10000" value={price.min} step="100" />
                            <input type="range" class="range-max" min="0" max="10000" value={price.max} step="100" />
                          </div> */}
                        </div>
                      </div> 

                      <div className="">
                        <h4>Dijagonala</h4>
                      </div>    

                      <div className="">
                        <h4>Procesor</h4>
                      </div> 

                      <div className="">
                        <h4>Memorija</h4>
                      </div>                                                                
                  </form>
                </div>
                
                <div className="col content">
                {products && products.map((item) => {
                    return (
                    <div key={item._id} className="card">
                        <figure className="card-image"></figure>
                        <main className="card-body">
                          <h3 className="card-title">{item.title}</h3>
                          <p className="card-desc">{item.description}</p>
                        </main>
                        <footer className="card-footer"></footer>
                    </div>
                    )
                })}
                </div>
            </div>
            </div>
        </section>
    )
}

export default Categories;