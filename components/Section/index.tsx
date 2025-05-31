type Props = {
  addClass?: string;
  children: React.ReactNode;
};

const Section = ({ addClass, children }: Props) => {
    return(

  <section className={`py-16 md:py-20 lg:py-24 ${addClass}`}>
    {children}
  </section>
    );
};

export default Section;
