import React, { Component } from 'react';

import './MockContent.css';

export class Image extends Component {
  render() {
    return <div className="MockContent-Image">
      <img src={this.props.url} alt="Perhaps a beautiful horse"/>
    </div>;
  }
}

export class AboutHorse extends Component {
    render() {
        return <div className="MockContent-Horse">
            <p>The <b>horse</b> (<i>Equus ferus caballus</i>)<sup id="cite_ref-MSW3_2-1"><a href="#cite_note-MSW3-2">[2]</a></sup><sup id="cite_ref-3"><a href="#cite_note-3">[3]</a></sup> is one of two <a href="/wiki/Extant_taxon" title="Extant taxon">extant</a> <a href="/wiki/Subspecies" title="Subspecies">subspecies</a> of <a href="/wiki/Wild_horse" title="Wild horse"><i>Equus ferus</i></a>. It is an <a href="/wiki/Odd-toed_ungulate" title="Odd-toed ungulate">odd-toed ungulate</a> <a href="/wiki/Mammal" title="Mammal">mammal</a> belonging to the taxonomic family <a href="/wiki/Equidae" title="Equidae">Equidae</a>. The horse has <a href="/wiki/Evolution_of_the_horse" title="Evolution of the horse">evolved</a> over the past 45 to 55&nbsp;million years from a small multi-toed creature, <i><a href="/wiki/Eohippus" title="Eohippus">Eohippus</a></i>, into the large, single-toed animal of today. Humans began to <a href="/wiki/Domestication" title="Domestication">domesticate</a> horses around 4000 BC, and their <a href="/wiki/Domestication_of_the_horse" title="Domestication of the horse">domestication</a> is believed to have been widespread by 3000 BC. Horses in the subspecies <i>caballus</i> are domesticated, although some domesticated populations live in the wild as <a href="/wiki/Feral_horse" title="Feral horse">feral horses</a>. These feral populations are not true <a href="/wiki/Wild_horse" title="Wild horse">wild horses</a>, as this term is used to describe horses that have never been domesticated, such as the endangered <a href="/wiki/Przewalski%27s_horse" title="Przewalski's horse">Przewalski's horse</a>, a separate subspecies, and the only remaining true <a href="/wiki/Wild_horse" title="Wild horse">wild horse</a>. There is an extensive, specialized vocabulary used to describe equine-related concepts, covering everything from <a href="/wiki/Equine_anatomy" title="Equine anatomy">anatomy</a> to life stages, size, <a href="/wiki/Equine_coat_color" title="Equine coat color">colors</a>, <a href="/wiki/Horse_markings" title="Horse markings">markings</a>, <a href="/wiki/Horse_breed" title="Horse breed">breeds</a>, <a href="/wiki/Horse_gait" title="Horse gait">locomotion</a>, and behavior.</p>;
        </div>
    }
}
