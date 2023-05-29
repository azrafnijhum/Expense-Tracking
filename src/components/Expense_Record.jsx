import React, { useState } from 'react';

const Expense_Record = () => {
    const [formData, setFormData] = useState({
        title: '',
        amount: '',
        category: '',
        date: '',
        notes: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
          title: '',
          amount: '',
          category: '',
          date: '',
          notes: ''
        });
      };
    return (
    <div>
      <h1>expense_record_with_table</h1>

      <form class="form" onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>          
            <br />
            <input type="text" name="title"
                value={formData.title}
                onChange={handleChange} placeholder='Title'/>        
        <br />
        <label htmlFor="">Amount</label>          
            <br />
            <input type="number" 
              name="amount"
              value={formData.amount}
              onChange={handleChange} placeholder='Amount (Tk.)'/>
        <br />
        <label htmlFor="">Category</label>            
            <br />
            <select name="category" value={formData.category}
            onChange={handleChange} id="">
                <option value="">Select Category</option>
                <option value="Eat Outs">Eat Outs</option>
                <option value="Gardening">Gardening</option>
                <option value="Health Care">Health Care</option>
                <option value="Transportation">Transportation</option>
            </select>
        
        <br />
        <label htmlFor="">Date</label>            
            <br />
            <input type="datetime-local" name="date"
            value={formData.date}
            onChange={handleChange} id="" />
        
        <br />
        <label htmlFor="">Notes</label>            
            <br />
            <textarea name="notes"
            value={formData.notes}
            onChange={handleChange} id="" cols="30" rows="2"></textarea>
        
        <br />
        <button type="submit">Submit</button>
        <button type="reset">Cancel</button>
        
      </form>
    </div>
  )
};

export default Expense_Record;
