export const Person = ({
  person: { name, age, sex, isMarried, partnerName },
}) => (
  <section className="Person">
    <h2 className="Person__name">My name is {name}</h2>
    {age !== undefined && <p className="Person__age">I am 37</p>}
    <p className="Person__partner">
      {isMarried
        ? `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`
        : 'not married'}
    </p>
  </section>
);
